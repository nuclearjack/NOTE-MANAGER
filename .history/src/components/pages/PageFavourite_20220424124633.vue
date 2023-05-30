<template>
  <PageContent :posts="posts" postType="favourite" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/pages/PageContent.vue';

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

<style lang="scss" scoped>
.favourite-page {
  & .page-bg {
    border: 5px solid $yellow-8;
  }
}
</style>
