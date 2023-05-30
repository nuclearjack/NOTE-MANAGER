import { defineStore } from 'pinia';
import { SettingState } from 'src/stores/types';

export const useSettingsStore = defineStore('settingsModule', {
  state: (): SettingState => ({
    _drawerBottom: true,
    _drawerLeft: false,
    _dialogPostsSort: false,
    _dialogConfirm: false,
  }),
  getters: {
    drawerBottom: (state) => state._drawerBottom,
    drawerLeft: (state) => state._drawerLeft,
    dialogPostsSort: (state) => state._dialogPostsSort,
    dialogConfirm: (state) => state._dialogConfirm,
  },
  actions: {
    setDrawerBottom(value: boolean) {
      this._drawerBottom = value;
    },
    setDrawerLeft(value: boolean) {
      this._drawerLeft = value;
    },
    setDialogPostsSort(value: boolean) {
      this._dialogPostsSort = value;
    },
    setDialogConfirm(value: boolean) {
      this._dialogConfirm = value;
    },
  },
});
