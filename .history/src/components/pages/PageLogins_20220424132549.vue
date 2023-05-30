<template>
  <PageContent :posts="posts" postType="login">
    <template #add-post>
      <AddPost postType="login" />
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import AddPost from 'src/components/partials/menus/AddPost.vue';

export default defineComponent({
  name: 'PageLogins',
  components: {
    PageContent,
    AddPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLogins);

    return { posts };
  },
});
</script>
