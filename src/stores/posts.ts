import { defineStore } from 'pinia';
import { PostState } from 'src/stores/types';
import { Post, SortPostsParameters } from 'src/components/models';

export const usePostsStore = defineStore('postsModule', {
  state: (): PostState => ({
    _posts: [],
    _postCurrent: null,
    _dialog: false,
    _sortValue: 'dateCreate',
    _sortReverse: true,
    _loading: true,
  }),
  getters: {
    posts: (state) => state._posts,

    loading: (state) => state._loading,

    dialog: (state) => state._dialog,

    sortValue: (state) => state._sortValue,

    sortReverse: (state) => state._sortReverse,

    postCurrent: (state) => state._postCurrent,

    activePosts: (state) => [...state._posts].filter((p) => !p.trash),

    postsLiked: (state) => [...state._posts].filter((p) => !p.trash && p.like),

    postsTrash: (state) => [...state._posts].filter((p) => p.trash),

    postsNotes: (state) =>
      [...state._posts].filter((p) => !p.trash && p.type === 'note'),

    postsLogins: (state) =>
      [...state._posts].filter((p) => !p.trash && p.type === 'login'),
  },
  actions: {
    setLoading(value: boolean) {
      this._loading = value;
    },

    setSortReverse(value: boolean) {
      this._sortReverse = value;
    },

    setSortValue(value: keyof SortPostsParameters) {
      this._sortValue = value;
    },

    setDialog(value: boolean) {
      this._dialog = value;
    },

    setCurrent(post: Post | null) {
      this._postCurrent = post;
    },

    save(post: Post) {
      this._posts = [...this._posts, post];
    },

    update(post: Post) {
      const postIndex = this._posts.findIndex((p) => p.id === post.id);

      if (postIndex) this._posts[postIndex] = post;
    },

    removeTrash() {
      const posts = [...this._posts].filter((p) => !p.trash);

      this._posts = posts;
    },

    likeCurrent() {
      const post = this._posts.find((p) => p.id === this.postCurrent?.id);

      if (post) post.like = !post.like;
    },

    restoreCurrent() {
      const post = this._posts.find((p) => p.id === this.postCurrent?.id);

      if (post) post.trash = false;
    },

    trashCurrent() {
      const post = this._posts.find((p) => p.id === this.postCurrent?.id);

      if (post) post.trash = true;
    },

    removeCurrent() {
      const posts = [...this._posts].filter((p) => {
        p.id !== this.postCurrent?.id;
      });

      this._posts = posts;
    },
  },
});
