<template>
  <PageContent :posts="posts" postType="favourite" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';

export default defineComponent({
  name: 'PageFavourite',
  components: {
    PageContent,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLiked);

    return { posts };
  },
});
</script>
