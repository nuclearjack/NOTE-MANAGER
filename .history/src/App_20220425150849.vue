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

    watch(
      postsStore._posts,
      () => {
        console.log('watch');
        postsStore.snapShot();
      },
      { deep: true }
    );
  },
});
</script>
