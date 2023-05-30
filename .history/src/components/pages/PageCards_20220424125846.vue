<template>
  <PageContent :posts="posts" postType="card">
    <template #add-post>
      <AddPost postType="card" />
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'components/template/PageContent.vue';
import AddPost from 'components/partials/menus/AddPost.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    PageContent,
    AddPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsCards);

    return { posts };
  },
});
</script>
