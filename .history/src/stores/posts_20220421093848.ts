import { defineStore } from 'pinia';
import POSTS from 'src/api/posts';

export const usePostsStore = defineStore('counter', {
  state: () => ({
    posts: POSTS,
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
