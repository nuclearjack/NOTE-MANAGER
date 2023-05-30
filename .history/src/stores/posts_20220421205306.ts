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
      posts ? (this._posts = JSON.parse(posts)) : (this._posts = []);
    },
    set(posts: Post[]) {
      this._posts = { ...posts };
      localStorage.setItem('holy-keeper', this.postsJSON);
    },
    save(post: Post) {
      this._posts = [...this.posts, post];
      localStorage.setItem('holy-keeper', this.postsJSON);
    },
    remove(post: Post) {
      this._posts = this._posts.filter((p) => p.id !== post.id);
      localStorage.setItem('holy-keeper', this.postsJSON);
    },
    update(post: Post) {
      console.log(post);
      const currentPost = Array.prototype.indexOf(
        this._posts.find((p) => {
          console.log(p);
          return p.id === post.id;
        })
      );
      console.log(currentPost);
    },
    setCurrent(post: Post | null) {
      post ? (this._postCurrent = { ...post }) : (this._postCurrent = null);
    },
    removeCurrent() {
      this._posts = this._posts.filter((p) => p.id !== this.postCurrent?.id);
      this.setCurrent(null);
      localStorage.setItem('holy-keeper', this.postsJSON);
    },
    open() {
      this._dialog = true;
    },
    close() {
      this._dialog = false;
    },
  },
});
