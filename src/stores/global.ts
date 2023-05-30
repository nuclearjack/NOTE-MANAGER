import { defineStore } from 'pinia';
import { GlobalState } from 'src/stores/types';
import { Post, Settings } from 'src/components/models';
import { usePostsStore } from './posts';
import { ls } from 'src/api';

const postsStore = usePostsStore();

export const useGlobalStore = defineStore('settingsModule', {
  state: (): GlobalState => ({
    _settings: {} as Settings,
    _drawerLeft: false,
    _dialogPostsSortType: false,
  }),
  getters: {
    settings: (state) => state._settings,

    drawerLeft: (state) => state._drawerLeft,

    dialogPostsSortType: (state) => state._dialogPostsSortType,
  },
  actions: {
    init() {
      const { settings, posts } = ls.getData();

      this._settings = (settings as Settings) ?? { dark: false };
      postsStore._posts = (posts as Post[]) ?? [];
    },

    snapShot() {
      const dataJSON = JSON.stringify({
        settings: this._settings,
        posts: postsStore._posts,
      });

      ls.setData(dataJSON);
    },

    setSetting(key: keyof Settings, value: boolean) {
      this._settings[key] = value;
    },

    setDrawerLeft(value: boolean) {
      this._drawerLeft = value;
    },

    setDialogPostsSortType(value: boolean) {
      this._dialogPostsSortType = value;
    },
  },
});
