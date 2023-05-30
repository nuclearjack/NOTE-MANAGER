<template>
  <PageContent :posts="posts" postType="note">
    <template #add-post>
      <ButtonPostAdd postType="note" />
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
    const posts = computed(() => store.postsNotes);

    return { posts };
  },
});
</script>
