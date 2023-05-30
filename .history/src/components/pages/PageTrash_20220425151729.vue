<template>
  <PageContent :posts="posts" post-type="trash">
    <template #add-post>
      <ButtonPostRemoveTrash v-if="posts.length" />
      <div class="hidden">
        <AddPostMenu />
      </div>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import AddPostMenu from 'src/components/partials/menus/AddPostMenu.vue';
import ButtonPostRemoveTrash from '../partials/ButtonPostRemoveTrash.vue';

export default defineComponent({
  name: 'PageTrash',
  components: {
    PageContent,
    AddPostMenu,
    ButtonPostRemoveTrash,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.postsTrash);

    return { posts };
  },
});
</script>
