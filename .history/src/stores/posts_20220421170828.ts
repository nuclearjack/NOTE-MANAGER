import { defineStore } from 'pinia';
import { PostStateInterface } from './types';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    _posts: [] as PostStateInterface[],
  }),
  getters: {
    posts: (state) => state._posts,
  },
  actions: {
    init() {
      const posts = localStorage.getItem('holy-keeper');
      if (posts) this._posts = JSON.parse(posts) ?? [];
    },
    set(posts: PostStateInterface[]) {
      this._posts = { ...posts };
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
    save(post: PostStateInterface) {
      this._posts = [...this.posts, post];
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
  },
});
