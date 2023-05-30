import { computed } from 'vue';
import { useSettingsStore } from 'src/stores/settings';

export const useSettings = (props) => {
  const settingsStore = useSettingsStore();
  const drawerBottom = computed(() => settingsStore.drawerBottom);
  const drawerLeft = computed(() => settingsStore.drawerLeft);
  const dialogPostsSort = computed(() => settingsStore.dialogPostsSort);
  const dialogConfirm = computed(() => settingsStore.drawerBottom);

  const setDrawerBottom = (value: boolean) => {
    settingsStore.setDrawerBottom(value);
  };

  const toggleDialogPostsSort = () => {
    settingsStore.setDialogPostsSort(!settingsStore.dialogPostsSort);
  };

  return {
    settingsStore,
    drawerBottom,
    drawerLeft,
    dialogPostsSort,
    dialogConfirm,
    setDrawerBottom,
    toggleDialogPostsSort,
  };
};
