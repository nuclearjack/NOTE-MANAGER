import { defineStore } from 'pinia';
import { PostState } from 'src/stores/types';
import { Post, SortPostsParameters } from 'src/components/models';
import { ls } from 'src/api';

export const usePostsStore = defineStore('postsModule', {
  state: (): PostState => ({
    _posts: [],
    _postCurrent: null,
    _dialog: false,
    _formType: 'note',
    _sortValue: 'dateCreate',
    _sortReverse: true,
  }),
  getters: {
    posts: (state) => [...state._posts].filter((p) => !p.trash),
    postsLiked: (state) => state.posts.filter((p) => p.like),
    postsNotes: (state) => state.posts.filter((p) => p.type === 'note'),
    postsLogins: (state) => state.posts.filter((p) => p.type === 'login'),
    postsCards: (state) => state.posts.filter((p) => p.type === 'card'),
    postsTrash: (state) => [...state._posts].filter((p) => p.trash),
    postsJSON: (state) => JSON.stringify(state._posts),
    postCurrent: (state) => state._postCurrent,
    postCurIndex: (state) =>
      state._posts.findIndex((p) => p.id === state.postCurrent?.id),
    dialog: (state) => state._dialog,
    formType: (state) => state._formType,
    sortValue: (state) => state._sortValue,
    sortReverseValue: (state) => state._sortReverse,
  },
  actions: {
    init() {
      this._posts = ls.getPosts();
    },
    snapShot() {
      ls.setPosts(this.postsJSON);
    },
    save(post: Post) {
      this._posts = [...this._posts, post];
    },
    update(post: Post) {
      this._posts[this._posts.findIndex((p) => p.id === post.id)] = post;
    },
    remove(post: Post) {
      this._posts = this._posts.filter((p) => p.id !== post.id);
    },
    removeAll() {
      this._posts = [];
    },
    removeTrash() {
      this._posts = this._posts.filter((p) => !p.trash);
    },
    setCurrent(post: Post | null) {
      this._postCurrent = post ? { ...post } : null;
    },
    trashCurrent() {
      this._posts[this.postCurIndex] = { ...this.postCurrent, trash: true };
    },
    restoreCurrent() {
      this._posts[this.postCurIndex] = {
        ...this.postCurrent,
        trash: false,
      };
    },
    trash(post: Post) {
      this._posts[this._posts.findIndex((p) => p.id === post.id)] = {
        ...post,
        trash: true,
      };
    },
    removeCurrent() {
      this._posts = this._posts.filter((p) => p.id !== this.postCurrent?.id);
    },
    setFormType(type: string) {
      this._formType = type;
    },
    toggleSortReverse() {
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
