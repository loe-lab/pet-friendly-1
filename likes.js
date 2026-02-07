// 좋아요 저장/관리 유틸리티 (localStorage 기반)
const LikesManager = {
  STORAGE_KEY: 'dailypet_likes',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  isLiked(title) {
    return this.getAll().some(item => item.title === title);
  },

  add(placeData) {
    const likes = this.getAll();
    // 중복 방지
    if (likes.some(item => item.title === placeData.title)) return;
    likes.push({
      title: placeData.title,
      image: placeData.image,
      location: placeData.location,
      tags: placeData.tags || [],
      category: placeData.category || '',
      likedAt: new Date().toISOString()
    });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(likes));
  },

  remove(title) {
    const likes = this.getAll().filter(item => item.title !== title);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(likes));
  },

  toggle(placeData) {
    if (this.isLiked(placeData.title)) {
      this.remove(placeData.title);
      return false; // unliked
    } else {
      this.add(placeData);
      return true; // liked
    }
  }
};
