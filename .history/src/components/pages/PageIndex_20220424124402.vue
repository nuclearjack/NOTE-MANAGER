<template>
  <PageContent :posts="posts">
    <template #add-post>
      <AddPostMenu />
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/pages/PageContent.vue';
import AddPostMenu from 'components/menus/AddPostMenu.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    PageContent,
    AddPostMenu,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  & .page-bg {
    border: 5px solid $indigo-5;
  }
}
</style>
