<template>
  <router-view />
  <router-view name="dialog" />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import { usePostsStore } from 'src/stores/posts';
// const { postsSorted } = usePostsSort();

export default defineComponent({
  name: 'App',
  preFetch({ store }) {
    usePostsStore(store).init();
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore._posts);

    watch(posts, () => postsStore.snapShot(), { deep: true });
  },
});
</script>
