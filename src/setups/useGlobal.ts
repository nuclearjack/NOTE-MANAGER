import { computed } from 'vue';
import { useGlobalStore } from 'src/stores/global';

export const useGlobal = () => {
  const settingsStore = useGlobalStore();

  const drawerLeft = computed({
    get: () => settingsStore.drawerLeft,
    set: (value) => settingsStore.setDrawerLeft(value),
  });

  const dialogPostsSortType = computed({
    get: () => settingsStore.dialogPostsSortType,
    set: (value) => settingsStore.setDialogPostsSortType(value),
  });

  return {
    drawerLeft,
    dialogPostsSortType,
  };
};
