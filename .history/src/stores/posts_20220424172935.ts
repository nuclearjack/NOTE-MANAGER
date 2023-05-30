import { defineStore } from 'pinia';
import { Post, Login, SortPostsParameters } from 'src/components/models';
import { ls } from 'src/api';

export type Posts = Post[] | Login[] | [];

export interface PostState {
  _posts: Posts;
  _postCurrent: Post | null;
  _dialog: boolean;
  _formType: string;
  _sortValue: keyof SortPostsParameters;
  _sortReverse: boolean;
}

export const usePostsStore = defineStore('postsModule', {
  state: (): PostState => ({
    _posts: [],
    _postCurrent: null,
    _dialog: false,
    _formType: 'note',
    _sortValue: 'dateCreate',
    _sortReverse: false,
  }),
  getters: {
    posts: (state) => [...state._posts],
    postsLiked: (state) => state._posts.filter((p) => p.like),
    postsNotes: (state) => state._posts.filter((p) => p.type === 'note'),
    postsLogins: (state) => state._posts.filter((p) => p.type === 'login'),
    postsCards: (state) => state._posts.filter((p) => p.type === 'card'),
    postsSorted: (state) => {
      return state._sortReverse
        ? state._posts.sort((a, b) => a[state._sortValue] - b[state._sortValue])
        : state._posts.sort(
            (a, b) => b[state._sortValue] - a[state._sortValue]
          );
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
    sortReverse() {
      this._sortReverse = !this._sortReverse;
    },
    setSortValue(value: keyof SortPostsParameters) {
      this._sortValue = value;
    },
    openDialog() {
      this._dialog = true;
    },
    closeDialog() {
      this._dialog = false;
    },
  },
});
