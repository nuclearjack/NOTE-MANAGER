import { defineStore } from 'pinia';
import { PostStateInterface } from './types';
import POSTS from 'src/api/posts';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: POSTS,
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    init() {
      this.posts = {
        ...JSON.parse(localStorage.getItem('holy-keeper') ?? ''),
      };
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
