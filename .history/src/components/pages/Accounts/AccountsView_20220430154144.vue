<template>
  <PageContent :posts="posts" postType="login">
    <ButtonPostAdd postType="login" />
    <router-link to="/logins/add">Тык</router-link>
    <router-view />
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import ButtonPostAdd from 'src/components/partials/ButtonPostAdd.vue';

export default defineComponent({
  name: 'AccountsView',
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
