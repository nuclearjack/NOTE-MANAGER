<template>
  <q-layout view="lHh Lpr lFf">
    <PageHeader @toggle-sidebar="drawerLeft = !drawerLeft" />

    <q-drawer v-model="drawerLeft" show-if-above class="bg-dark">
      <PageSidebar />
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

    <PageFooter />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSettings } from 'src/setups/useSettings';

import PageHeader from 'src/components/template/PageHeader.vue';
import PageFooter from 'src/components/template/PageFooter.vue';
import PageSidebar from 'src/components/template/PageSidebar.vue';
import DialogPostsSort from 'src/components/partials/dialogs/DialogPostsSort.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    PageHeader,
    PageFooter,
    PageSidebar,
    DialogPostsSort,
  },
  setup() {
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const { drawerLeft } = useSettings();

    return {
      route,
      title,
      drawerLeft,
    };
  },
});
</script>
