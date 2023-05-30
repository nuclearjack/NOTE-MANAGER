import { computed } from 'vue';
import { useSettingsStore } from 'src/stores/settings';

export const useSettings = () => {
  const settingsStore = useSettingsStore();
  const drawerBottom = computed(() => settingsStore.drawerBottom);
  const drawerLeft = computed({
    get: () => settingsStore.drawerLeft,
    set: (value) => settingsStore.setDrawerLeft(value),
  });
  const dialogPostsSort = computed(() => settingsStore.dialogPostsSort);
  const dialogConfirm = computed(() => settingsStore.drawerBottom);

  const toggleDrawerBottom = () => {
    settingsStore.setDrawerBottom(!settingsStore.drawerBottom);
  };

  const toggleDrawerLeft = () => {
    settingsStore.setDrawerLeft(!settingsStore.drawerLeft);
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
    toggleDrawerBottom,
    toggleDrawerLeft,
    toggleDialogPostsSort,
  };
};
