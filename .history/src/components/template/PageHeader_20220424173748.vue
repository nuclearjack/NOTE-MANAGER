<template>
  <q-header elevated class="bg-dark">
    <q-toolbar>
      <q-btn
        aria-label="Menu"
        icon="menu"
        round
        dense
        flat
        @click="leftDrawerOpen = !leftDrawerOpen"
      />

      <q-toolbar-title>{{ title }}</q-toolbar-title>

      <!-- <q-btn flat dense round icon="search" aria-label="Search" /> -->

      <q-btn
        flat
        dense
        round
        icon="sort"
        aria-label="Sort"
        @click="showSort = !showSort"
      />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { useRoute } from 'vue-router';
import { SortPostsParameters } from 'src/components/models';

export default defineComponent({
  name: 'PageHeader',
  components: {},
  setup() {
    const postsStore = usePostsStore();
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const leftDrawerOpen = ref(false);
    const showSort = ref(false);
    const sortPosts = (value: keyof SortPostsParameters) => {
      postsStore.sortReverse();
      postsStore.setSortValue(value);
    };

    return {
      title,
      leftDrawerOpen,
      showSort,
      sortPosts,
    };
  },
});
</script>
