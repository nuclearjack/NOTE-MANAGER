<template>
  <PageContent :posts="posts" postType="login">
    <q-btn
      icon="mdi-key"
      color="teal-14"
      class="btn-add-post"
      size="lg"
      round
      @click="$emit('new-post')"
    />
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';

export default defineComponent({
  name: 'AccountsView',
  components: {
    PageContent,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);

    return { posts };
  },
});
</script>
