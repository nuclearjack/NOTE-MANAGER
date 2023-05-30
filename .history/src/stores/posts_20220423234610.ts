import { defineStore } from 'pinia';
import { Post } from 'src/components/models';
import { ls } from 'src/api';

export interface PostState {
  _posts: Post[] | [];
  _postCurrent: Post | null;
  _dialog: boolean;
  _formType: string;
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
    postsReversed: (state) => [...state._posts].reverse(),
    postsLiked: (state) => state._posts.filter((p) => p.like),
    postsNotes: (state) => state._posts.filter((p) => p.type === 'note'),
    postsLogins: (state) => state._posts.filter((p) => p.type === 'login'),
    postsCards: (state) => state._posts.filter((p) => p.type === 'card'),
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
    setCurrent(post: Post | null) {
      post ? (this._postCurrent = { ...post }) : (this._postCurrent = null);
    },
    remove(post: Post) {
      this._posts = this._posts.filter((p) => p.id !== post.id);
    },
    removeAll() {
      this._posts = [];
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
