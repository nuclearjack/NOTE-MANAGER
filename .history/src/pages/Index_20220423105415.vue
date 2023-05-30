<template>
  <PageIndex />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageIndex from 'src/components/pages/PageIndex.vue';

export default defineComponent({
  name: 'AppHome',
  components: {
    PageIndex,
  },
  preFetch({ store }) {
    usePostsStore(store).init();
  },
  beforeUnmount() {
    usePostsStore().snapShot();
  },
});
</script>
