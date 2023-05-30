import { computed } from 'vue';
import { useSettingsStore } from 'src/stores/settings';

export const useSettings = () => {
  const settingsStore = useSettingsStore();

  const drawerBottom = computed({
    get: () => settingsStore.drawerBottom,
    set: (value) => settingsStore.setDrawerBottom(value),
  });

  const drawerLeft = computed({
    get: () => settingsStore.drawerLeft,
    set: (value) => settingsStore.setDrawerLeft(value),
  });

  const dialogPostsSort = computed({
    get: () => settingsStore.dialogPostsSort,
    set: (value) => settingsStore.setDialogPostsSort(value),
  });

  const dialogConfirm = computed({
    get: () => settingsStore.drawerBottom,
    set: (value) => settingsStore.setDialogConfirm(value),
  });

  return {
    settingsStore,
    drawerBottom,
    drawerLeft,
    dialogPostsSort,
    dialogConfirm,
  };
};
