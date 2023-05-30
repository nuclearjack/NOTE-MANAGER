<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'App',
  preFetch({ store }) {
    const postsStore = usePostsStore(store);
    postsStore.init();
  },
  setup() {
    const postsStore = usePostsStore();

    watch(postsStore._posts, () => postsStore.snapShot(), { deep: true });
  },
});
</script>
