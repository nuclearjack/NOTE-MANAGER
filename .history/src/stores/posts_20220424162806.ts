import { defineStore } from 'pinia';
import { Post, Login, Card } from 'src/components/models';
import { ls } from 'src/api';

export type Posts = Post[] | Login[] | [];

export interface PostState {
  _posts: Posts;
  _postCurrent: Post | null;
  _dialog: boolean;
  _formType: string;
}

// export type SortPostsParameters = 'name',
// 'type',
// 'dateCreate',
// 'dateUpdate'

export enum sortPostsParameters {
  // 'name',
  // 'type',
  'dateCreate',
  'dateUpdate',
}

export const usePostsStore = defineStore('postsModule', {
  state: (): PostState => ({
    _posts: [],
    _postCurrent: null,
    _dialog: false,
    _formType: 'note',
  }),
  getters: {
    posts: (state) => [...state._posts],
    postsLiked: (state) => state._posts.filter((p) => p.like),
    postsNotes: (state) => state._posts.filter((p) => p.type === 'note'),
    postsLogins: (state) => state._posts.filter((p) => p.type === 'login'),
    postsCards: (state) => state._posts.filter((p) => p.type === 'card'),
    postsSorted: (state) => (value: keyof sortPostsParameters) => {
      state._posts.sort((a, b) => a[value] - b[value]);
    },
    postsJSON: (state) => JSON.stringify(state._posts),
    postCurrent: (state) => state._postCurrent,
    dialog: (state) => state._dialog,
    formType: (state) => state._formType,
  },
  actions: {
    init() {
      this._posts = ls.getPosts();
    },
    snapShot() {
      ls.setPosts(this.postsJSON);
    },
    save(post: Post) {
      this._posts = [...this.posts, post];
    },
    update(post: Post) {
      this._posts[this.posts.findIndex((p) => p.id === post.id)] = post;
    },
    remove(post: Post) {
      this._posts = this._posts.filter((p) => p.id !== post.id);
    },
    removeAll() {
      this._posts = [];
    },
    setCurrent(post: Post | null) {
      post ? (this._postCurrent = { ...post }) : (this._postCurrent = null);
    },
    removeCurrent() {
      this._posts = this._posts.filter((p) => p.id !== this.postCurrent?.id);
    },
    setFormType(type: string) {
      this._formType = type;
    },
    openDialog() {
      this._dialog = true;
    },
    closeDialog() {
      this._dialog = false;
    },
  },
});
