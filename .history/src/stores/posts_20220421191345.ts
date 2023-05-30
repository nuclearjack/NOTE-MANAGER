import { defineStore } from 'pinia';
import { Post, PostState } from './types';

export const usePostsStore = defineStore('posts', {
  state: (): PostState => ({
    _posts: [],
    _postCurrent: null,
    _dialog: false,
  }),
  getters: {
    posts: (state) => state._posts,
    postCurrent: (state) => state._postCurrent,
    dialog: (state) => state._dialog,
  },
  actions: {
    init() {
      const posts = localStorage.getItem('holy-keeper');
      posts ? (this._posts = JSON.parse(posts)) : [];
    },
    set(posts: Post[]) {
      this._posts = { ...posts };
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
    save(post: Post) {
      this._posts = [...this.posts, post];
      localStorage.setItem('holy-keeper', JSON.stringify(this.posts));
    },
    remove(post: Post) {
      console.log(post);
    },
    setCurrent(post: Post) {
      this._postCurrent = { ...post };
    },
    open() {
      this._dialog = true;
    },
    close() {
      this._dialog = false;
    },
  },
});
