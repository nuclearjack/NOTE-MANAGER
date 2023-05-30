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
    postsJSON: (state) => JSON.stringify(state._posts),
    postCurrent: (state) => state._postCurrent,
    dialog: (state) => state._dialog,
  },
  actions: {
    init() {
      const posts = localStorage.getItem('holy-keeper');
      posts ? (this._posts = JSON.parse(posts)) : [];
    },
    setOne(posts: Post[]) {
      this._posts = { ...posts };
      // localStorage.setItem('holy-keeper', this.postsJSON);
    },
    save(post: Post) {
      this._posts = [...this.posts, post];
      // localStorage.setItem('holy-keeper', this.postsJSON);
    },
    removeOne(post: Post) {
      this._posts = this._posts.filter((p) => p.id !== post.id);
      // localStorage.setItem('holy-keeper', this.postsJSON);
    },
    removeAll() {
      this._posts = [];
      // localStorage.setItem('holy-keeper', this.postsJSON);
    },
    update(post: Post) {
      // const pIndex = this.posts.findIndex((p) => p.id === post.id);
      // const posts = Object.assign(this._posts, pIndex, post);
      // localStorage.setItem('holy-keeper', JSON.stringify(posts));
    },
    setCurrent(post: Post | null) {
      post ? (this._postCurrent = { ...post }) : null;
    },
    removeCurrent() {
      this._posts = this._posts.filter((p) => p.id !== this.postCurrent?.id);
      this.setCurrent(null);
      // localStorage.setItem('holy-keeper', this.postsJSON);
    },
    open() {
      this._dialog = true;
    },
    close() {
      this._dialog = false;
    },
  },
});
