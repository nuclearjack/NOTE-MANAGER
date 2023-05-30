<template>
  <q-layout view="lHh Lpr lFf">
    <PageHeader />

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

    <q-footer elevated class="bg-grey-8 text-white">
      <BottomMenu />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import SidebarLeft from 'src/components/partials/menus/SidebarLeft.vue';
import BottomMenu from 'src/components/partials/menus/BottomMenu.vue';
import PageHeader from 'src/components/template/PageHeader.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    PageHeader,
    SidebarLeft,
    BottomMenu,
  },
  setup() {
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const leftDrawerOpen = ref(false);

    return {
      route,
      title,
      leftDrawerOpen,
    };
  },
});
</script>
