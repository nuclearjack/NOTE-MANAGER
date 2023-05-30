import { defineStore } from 'pinia';
import POSTS from 'src/api/posts';

import { PostStateInterface } from 'src/components/models';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: POSTS,
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    save(post: PostStateInterface) {
      this.posts = [...this.posts, post];
      console.log(this.posts);
    },
  },
});
