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
    set(posts: PostStateInterface[]) {
      this.posts = { ...posts };
    },
    save(post: PostStateInterface) {
      this.posts = [...this.posts, post];
    },
  },
});
