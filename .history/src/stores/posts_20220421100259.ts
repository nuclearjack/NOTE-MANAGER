import { defineStore } from 'pinia';
import POSTS from 'src/api/posts';

import { PostStateInterface } from 'src/components/models';

export const usePostsStore = defineStore('counter', {
  state: () => ({
    posts: POSTS,
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    save(post: PostStateInterface) {
      console.log(post);
      // state.posts = [...this.posts, post];
    },
  },
});
