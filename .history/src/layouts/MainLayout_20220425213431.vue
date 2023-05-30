<template>
  <q-layout view="lHh Lpr lFf">
    <PageHeader @toggle-sidebar="toggleDrawerLeft" />

    <q-drawer v-model="drawerLeft" show-if-above class="bg-dark">
      <SidebarLeft />
    </q-drawer>

    <q-page-container>
      <router-view :key="route.path" v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated"
          leave-active-class="animated"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <DialogPostsSort />

    <q-footer elevated class="bg-grey-8 text-white">
      <BottomMenu />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSettings } from 'src/setups/useSettings';

import PageHeader from 'src/components/template/PageHeader.vue';
import SidebarLeft from 'src/components/partials/menus/SidebarLeft.vue';
import BottomMenu from 'src/components/partials/menus/BottomMenu.vue';
import DialogPostsSort from 'src/components/partials/dialogs/DialogPostsSort.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    PageHeader,
    SidebarLeft,
    BottomMenu,
    DialogPostsSort,
  },
  setup() {
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const { drawerLeft, toggleDrawerLeft } = useSettings();
    // const leftDrawerOpen = ref(false);

    return {
      route,
      title,
      drawerLeft,
      toggleDrawerLeft,
    };
  },
});
</script>
