<template>
  <PageContent :posts="posts" postType="note" />
  <ButtonPostAdd postType="note" />
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
