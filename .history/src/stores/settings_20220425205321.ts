import { defineStore } from 'pinia';
import { SettingState } from 'src/stores/types';
// import { Post, SortPostsParameters } from 'src/components/models';
// import { ls } from 'src/api';

export const useSettingsStore = defineStore('settingsModule', {
  state: (): SettingState => ({
    _drawerBottomShow: false,
    _drawerLeftShow: false,
    _dialogPostsSort: false,
    _dialogConfirm: false,
  }),
  getters: {
    drawerBottomShow: (state) => state._drawerBottomShow,
    drawerLeftShow: (state) => state._drawerLeftShow,
    dialogPostsSort: (state) => state._dialogPostsSort,
    dialogConfirm: (state) => state._dialogConfirm,
  },
  actions: {
    setDrawerBottom(value: boolean) {
      this._drawerBottomShow = value;
    },
    setDrawerLeft(value: boolean) {
      this._drawerLeftShow = value;
    },
  },
});
