<template>
  <PostsView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostsView from 'components/pages/Posts/PostsView.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    PostsView,
  },
});
</script>
