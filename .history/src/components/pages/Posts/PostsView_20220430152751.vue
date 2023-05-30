<template>
  <PageContent :posts="posts">
    <AddPostMenu />
    <vue-link to="/add">Тык</vue-link>
    <router-view />
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import AddPostMenu from 'src/components/partials/menus/AddPostMenu.vue';

export default defineComponent({
  name: 'PostsView',
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
