<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          icon="menu"
          round
          dense
          flat
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ title }}</q-toolbar-title>

        <!-- <q-btn flat dense round icon="search" aria-label="Search" /> -->

        <!-- <q-btn flat dense round icon="sort" aria-label="Sort" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-dark">
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

    <!-- <AddPostMenu /> -->

    <q-footer elevated class="bg-grey-8 text-white">
      <BottomMenu />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, ref, computed } from 'vue';
import SidebarLeft from 'components/partials/menus/SidebarLeft.vue';
import BottomMenu from 'components/partials/menus/BottomMenu.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    SidebarLeft,
    BottomMenu,
  },
  setup() {
    const route = useRoute();
    const leftDrawerOpen = ref(false);
    const title = computed(() => route.meta.title);

    return {
      title,
      leftDrawerOpen,
      route,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
