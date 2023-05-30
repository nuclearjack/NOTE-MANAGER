<template>
  <PageContent :posts="posts" postType="note">
    <template #add-post>
      <AddPost postType="note" />
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'components/template/PageContent.vue';
import AddPost from 'components/partials/AddPost.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    PageContent,
    AddPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsNotes);

    return { posts };
  },
});
</script>
