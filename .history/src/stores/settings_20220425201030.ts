import { defineStore } from 'pinia';
import { SettingState } from 'src/stores/types';
// import { Post, SortPostsParameters } from 'src/components/models';
// import { ls } from 'src/api';

export const useSettingsStore = defineStore('settingsModule', {
  state: (): SettingState => ({
    _dialogBottomShow: false,
    _dialogLeftShow: false,
    _dialogPostConfirm: false,
    _dialogPostsSort: false,
  }),
  getters: {
    postsLiked: (state) => state._dialogBottomShow,
  },
  actions: {},
});
