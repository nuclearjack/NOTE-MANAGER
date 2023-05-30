<template>
  <!-- <q-page class="home-page page-default row items-start q-pa-md">
    <q-icon name="mdi-apps" class="page-bg" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <AddPostMenu />
  </q-page> -->
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
