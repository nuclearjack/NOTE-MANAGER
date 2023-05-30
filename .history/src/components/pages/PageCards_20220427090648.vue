<template>
  <PageContent :posts="posts" postType="card">
    <template #add-post>
      <ButtonPostAdd postType="card" />
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import ButtonPostAdd from 'src/components/partials/ButtonPostAdd.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    PageContent,
    ButtonPostAdd,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsCards);

    return { posts };
  },
});
</script>
