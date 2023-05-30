<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'App',
  preFetch({ store }) {
    console.log(222);
    usePostsStore(store).init();
  },
  // setup() {
  //   usePostsStore().init();
  // },
});
</script>
