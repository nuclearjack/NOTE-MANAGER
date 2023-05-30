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

  const setDdialogPostsSort = (value: boolean) => {
    settingsStore.setDialogPostsSort(value);
  };

  return {
    settingsStore,
    drawerBottom,
    drawerLeft,
    dialogPostsSort,
    dialogConfirm,
    setDrawerBottom,
    setDdialogPostsSort,
  };
};
