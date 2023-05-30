import { defineStore } from 'pinia';
import { Post, PostState } from './types';

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
    set(posts: Post[]) {
      this._posts = { ...posts };
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
    save(post: Post) {
      this._posts = [...this.posts, post];
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
  },
});
