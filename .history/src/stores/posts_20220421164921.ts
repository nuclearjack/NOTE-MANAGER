import { defineStore } from 'pinia';
import { PostStateInterface } from './types';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as PostStateInterface[],
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    init() {
      const posts = localStorage.getItem('holy-keeper');
      if (posts) this.posts = JSON.parse(posts) ?? [];
    },
    set(posts: PostStateInterface[]) {
      this.posts = { ...posts };
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
    save(post: PostStateInterface) {
      this.posts = [...this.posts, post];
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
  },
});
