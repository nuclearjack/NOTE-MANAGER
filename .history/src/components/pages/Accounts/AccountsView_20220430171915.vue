<template>
  <PageContent :posts="posts" postType="login">
    <q-list class="full-width">
      <PostCard v-for="(post, i) in postsSorted" :key="i" :post="post" />
    </q-list>
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
import { usePostsSort } from 'src/setups/usePostsSort';
import PageContent from 'src/components/template/PageContent.vue';
import AccountAdd from 'src/components/pages/Accounts/AccountAdd.vue';
import PostCard from 'src/components/partials/cards/PostCard.vue';

export default defineComponent({
  name: 'AccountsView',
  components: {
    PageContent,
    AccountAdd,
    PostCard,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);
    const addPost = () => postsStore.setDialogAccountAdd(true);
    // const postsSorted = computed(() => {
    //   const sorted = posts.value.sort(sortPosts(sortValue.value));
    //   return sortReverse.value ? [...sorted].reverse() : sorted;
    // });

    return { posts, addPost };
  },
});
</script>
