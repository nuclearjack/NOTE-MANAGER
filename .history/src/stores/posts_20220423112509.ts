import { defineStore } from 'pinia';
import { Post, PostState } from './types';

export const usePostsStore = defineStore('postsModule', {
  state: (): PostState => ({
    _posts: [],
    _postCurrent: null,
    _dialog: false,
  }),
  getters: {
    posts: (state) => state._posts,
    postsLiked: (state) => state._posts.filter((p) => p.like),
    postsJSON: (state) => JSON.stringify(state._posts),
    postCurrent: (state) => state._postCurrent,
    dialog: (state) => state._dialog,
    postsReversed: function () {
      const reversed = Array.prototype.reverse.call([...this.posts]);
      return reversed;
    },
  },
  actions: {
    init() {
      const posts = localStorage.getItem('holy-keeper');
      posts ? (this._posts = JSON.parse(posts)) : (this._posts = []);
    },
    snapShot() {
      localStorage.setItem('holy-keeper', this.postsJSON);
    },
    setOne(posts: Post[]) {
      this._posts = { ...posts };
    },
    save(post: Post) {
      this._posts = [...this.posts, post];
    },
    update(post: Post) {
      this._posts[this.posts.findIndex((p) => p.id === post.id)] = post;
    },
    setCurrent(post: Post | null) {
      post ? (this._postCurrent = { ...post }) : (this._postCurrent = null);
    },
    removeOne(post: Post) {
      this._posts = this._posts.filter((p) => p.id !== post.id);
    },
    removeAll() {
      this._posts = [];
    },
    removeCurrent() {
      this._posts = this._posts.filter((p) => p.id !== this.postCurrent?.id);
      this.setCurrent(null);
    },
    open() {
      this._dialog = true;
    },
    close() {
      this.setCurrent(null);
      this._dialog = false;
    },
  },
});
