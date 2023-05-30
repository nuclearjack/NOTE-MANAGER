<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'App',
  preFetch({ store }) {
    const postsStore = usePostsStore(store);
    postsStore.init();
    postsStore.$subscribe((mutation, state) => {
      console.log(state);
    });
  },
});
</script>
