// 좋아요 저장/관리 유틸리티 (localStorage 기반 + Supabase 동기화)
const LikesManager = {
  STORAGE_KEY: 'dailypet_likes',
  FALLBACK_IMAGE: '0.thumbnail_food.png',

  getAll() {
    try {
      const primary = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
      if (Array.isArray(primary) && primary.length > 0) return primary;

      // 과거 키 호환 (캐러셀 미노출 방지)
      const legacyKeys = ['liked_places', 'likes'];
      for (const key of legacyKeys) {
        const legacy = JSON.parse(localStorage.getItem(key)) || [];
        if (Array.isArray(legacy) && legacy.length > 0) {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(legacy));
          return legacy;
        }
      }
      return [];
    } catch {
      return [];
    }
  },

  _save(likes) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(likes));
  },

  _normalizeImageUrl(imageUrl, supabaseClient) {
    if (Array.isArray(imageUrl)) imageUrl = imageUrl[0];
    if (imageUrl && typeof imageUrl === 'object') {
      imageUrl = imageUrl.image_url || imageUrl.url || imageUrl.publicUrl || '';
    }
    if (typeof imageUrl === 'string') {
      const trimmed = imageUrl.trim();
      if (!trimmed) return this.FALLBACK_IMAGE;
      if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
        try {
          return this._normalizeImageUrl(JSON.parse(trimmed), supabaseClient);
        } catch (_) {
          imageUrl = trimmed;
        }
      } else {
        imageUrl = trimmed;
      }
    }

    if (!imageUrl || typeof imageUrl !== 'string') return this.FALLBACK_IMAGE;
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://') || imageUrl.startsWith('data:') || imageUrl.startsWith('/')) {
      return imageUrl;
    }

    const filePath = imageUrl
      .replace(/^place-images\//, '')
      .replace(/^places\//, '')
      .trim();
    if (!filePath) return this.FALLBACK_IMAGE;

    try {
      const buckets = ['place-images', 'places'];
      for (const bucket of buckets) {
        const { data } = supabaseClient.storage.from(bucket).getPublicUrl(filePath);
        if (data && data.publicUrl) return data.publicUrl;
      }
      return this.FALLBACK_IMAGE;
    } catch {
      return this.FALLBACK_IMAGE;
    }
  },

  isLiked(title) {
    return this.getAll().some(item => item.title === title);
  },

  isLikedById(id) {
    return this.getAll().some(item => item.id === id);
  },

  add(placeData) {
    const likes = this.getAll();
    if (likes.some(item => item.title === placeData.title)) return;
    likes.push({
      id: placeData.id || '',
      title: placeData.title,
      image: placeData.image,
      location: placeData.location,
      tags: placeData.tags || [],
      category: placeData.category || '',
      likedAt: new Date().toISOString()
    });
    this._save(likes);
  },

  remove(title) {
    const likes = this.getAll().filter(item => item.title !== title);
    this._save(likes);
  },

  toggle(placeData) {
    if (this.isLiked(placeData.title)) {
      this.remove(placeData.title);
      return false;
    } else {
      this.add(placeData);
      return true;
    }
  },

  // Supabase에서 최신 데이터로 localStorage 전체 동기화
  async syncWithSupabase(supabaseClient) {
    if (!supabaseClient) return;
    const likes = this.getAll();
    if (likes.length === 0) return;

    try {
      // id가 있는 항목과 없는 항목 분리
      const withId = likes.filter(p => p.id);
      const withoutId = likes.filter(p => !p.id);

      let freshMap = {};

      // 1) id 기반 조회
      if (withId.length > 0) {
        const ids = withId.map(p => p.id);
        const { data } = await supabaseClient
          .from('places')
          .select('id, title, location, image_url, tags, welcomepet_score')
          .in('id', ids);
        if (data) {
          data.forEach(p => { freshMap[p.id] = p; });
        }
      }

      // 2) id 없는 항목은 title 기반 조회로 id 복구
      if (withoutId.length > 0) {
        const titles = withoutId.map(p => p.title).filter(Boolean);
        if (titles.length > 0) {
          const { data } = await supabaseClient
            .from('places')
            .select('id, title, location, image_url, tags, welcomepet_score')
            .in('title', titles);
          if (data) {
            const titleMap = {};
            data.forEach(p => { titleMap[p.title] = p; });
            // id 없는 항목에 id 채우기
            withoutId.forEach(p => {
              if (titleMap[p.title]) {
                p.id = titleMap[p.title].id;
                freshMap[p.id] = titleMap[p.title];
              }
            });
          }
        }
      }

      // 3) 모든 항목을 최신 데이터로 갱신
      likes.forEach(p => {
        const fresh = p.id ? freshMap[p.id] : null;
        if (fresh) {
          p.image = this._normalizeImageUrl(fresh.image_url || p.image, supabaseClient);
          p.title = fresh.title || p.title;
          p.location = fresh.location || p.location;
          p.tags = fresh.tags || p.tags;
          p.welcomepet_score = fresh.welcomepet_score || 0;
        }
      });

      // 항상 저장 (최신 상태 보장)
      this._save(likes);
      console.log('[LikesManager] Supabase 최신 데이터로 동기화 완료');
    } catch (err) {
      console.warn('[LikesManager] Supabase 동기화 실패, 캐시 사용:', err);
    }
  }
};
