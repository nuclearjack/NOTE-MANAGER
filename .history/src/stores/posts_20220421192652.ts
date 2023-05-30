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
      this._posts = this._posts.filter((p) => p.id !== post.id);
    },
    setCurrent(post: Post | null) {
      post ? (this._postCurrent = { ...post }) : (this._postCurrent = null);
    },
    open() {
      this._dialog = true;
    },
    close() {
      this._dialog = false;
    },
  },
});
