<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <PageHeader />
      <q-drawer v-model="drawerLeft" show-if-above class="bg-dark">
        <PageSidebar />
      </q-drawer>
      <router-view :key="route.path" v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated"
          leave-active-class="animated"
        >
          <component :is="Component" />
        </transition>
      </router-view>

      <DialogPostsSort />
      <PageFooter />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSettings } from 'src/setups/useSettings';

import PageHeader from 'src/components/template/PageHeader.vue';
import PageFooter from 'src/components/template/PageFooter.vue';
import PageSidebar from 'src/components/template/PageSidebar.vue';
// import PageDialogBottom from 'src/components/template/PageDialogBottom.vue';
import DialogPostsSort from 'components/partials/dialogs/DialogPostsSort.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    PageHeader,
    PageFooter,
    PageSidebar,
    // PageDialogBottom,
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
