import { defineStore } from 'pinia';
import { PostState } from './types';

export const usePostsStore = defineStore('posts', {
  state: (): PostState => ({
    _posts: [],
  }),
  getters: {
    posts: (state) => state._posts,
  },
  actions: {
    init() {
      const posts = localStorage.getItem('holy-keeper');
      if (posts) this._posts = JSON.parse(posts) ?? [];
    },
    set(posts: PostState) {
      this._posts = { ...posts };
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
    save(post: PostState) {
      this._posts = [...this.posts, post];
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
  },
});
