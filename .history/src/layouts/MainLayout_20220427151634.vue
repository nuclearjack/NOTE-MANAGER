<template>
  <q-layout view="lHh Lpr lFf">
    <PageHeader />

    <q-drawer v-model="drawerLeft" show-if-above class="bg-dark">
      <router-view name="sidebar" />
    </q-drawer>

    <router-view />

    <router-view name="sort" />

    <PageFooter />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import PageHeader from 'src/components/template/PageHeader.vue';
import PageFooter from 'src/components/template/PageFooter.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    PageHeader,
    PageFooter,
  },
  setup() {
    const route = useRoute();
    const title = computed(() => route.meta.title);

    return {
      route,
      title,
    };
  },
});
</script>
