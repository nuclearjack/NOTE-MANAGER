<template>
  <q-header elevated class="bg-dark">
    <q-toolbar>
      <q-btn
        aria-label="Menu"
        icon="menu"
        round
        dense
        flat
        @click="drawerLeft = !drawerLeft"
      />

      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <!-- <q-btn flat dense round icon="search" aria-label="Search" /> -->
      <q-btn
        flat
        dense
        round
        icon="sort"
        aria-label="Sort"
        @click="dialogPostsSort = !dialogPostsSort"
      />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSettings } from 'src/setups/useSettings';
import { usePostSort } from 'src/setups/usePostSort';

export default defineComponent({
  name: 'PageHeader',
  setup(props) {
    const route = useRoute();
    const title = computed(() => route.meta.title);

    const { sortValue, sortReverse, onSortPosts } = usePostSort(props);
    const { drawerLeft, dialogPostsSort } = useSettings();

    return {
      title,
      sortValue,
      sortReverse,
      drawerLeft,
      dialogPostsSort,
      onSortPosts,
    };
  },
});
</script>
