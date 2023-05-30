<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'App',
  preFetch({ store }) {
    usePostsStore(store).init();
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore._posts);

    watch(posts, () => {
      postsStore.snapShot();
    });
  },
});
</script>
