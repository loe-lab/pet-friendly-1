// 좋아요 저장/관리 유틸리티 (localStorage 기반 + Supabase 동기화)
const LikesManager = {
  STORAGE_KEY: 'dailypet_likes',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  _save(likes) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(likes));
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

  // Supabase에서 최신 데이터로 localStorage 동기화
  async syncWithSupabase(supabaseClient) {
    if (!supabaseClient) return;
    const likes = this.getAll();
    if (likes.length === 0) return;

    const likedIds = likes.map(p => p.id).filter(Boolean);
    if (likedIds.length === 0) return;

    try {
      const { data, error } = await supabaseClient
        .from('places')
        .select('id, title, location, image_url, tags, welcomepet_score')
        .in('id', likedIds);

      if (error || !data) return;

      const freshMap = {};
      data.forEach(p => { freshMap[p.id] = p; });

      let updated = false;
      likes.forEach(p => {
        if (p.id && freshMap[p.id]) {
          const fresh = freshMap[p.id];
          if (p.image !== fresh.image_url || p.title !== fresh.title || p.location !== fresh.location) {
            updated = true;
          }
          p.image = fresh.image_url || p.image;
          p.title = fresh.title || p.title;
          p.location = fresh.location || p.location;
          p.tags = fresh.tags || p.tags;
          p.welcomepet_score = fresh.welcomepet_score || 0;
        }
      });

      if (updated) {
        this._save(likes);
        console.log('[LikesManager] Supabase 최신 데이터로 동기화 완료');
      }
    } catch (err) {
      console.warn('[LikesManager] Supabase 동기화 실패, 캐시 사용:', err);
    }
  }
};
