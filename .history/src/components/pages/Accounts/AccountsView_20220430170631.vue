<template>
  <PageContent :posts="posts" postType="login">
    <AccountAdd />
    <q-btn
      icon="mdi-key"
      color="teal-14"
      class="btn-add-post"
      size="lg"
      round
      @click="addPost"
    />
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import AccountAdd from 'src/components/pages/Accounts/AccountAdd.vue';

export default defineComponent({
  name: 'AccountsView',
  components: {
    PageContent,
    AccountAdd,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);
    const addPost = () => postsStore.setDialogAccountAdd(true);

    return { posts, addPost };
  },
});
</script>
