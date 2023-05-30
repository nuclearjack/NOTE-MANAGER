<template>
  <PageContent :posts="posts" postType="login">
    <ButtonPostAdd postType="login" />
    <router-link to="/add">Тык</router-link>
    <router-view />
  </PageContent>

  <ButtonPostAdd postType="login" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import ButtonPostAdd from 'src/components/partials/AddPostMenu.vue';

export default defineComponent({
  name: 'PostsView',
  components: {
    PageContent,
    ButtonPostAdd,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);

    return { posts };
  },
});
</script>
