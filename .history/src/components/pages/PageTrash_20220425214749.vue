<template>
  <PageContent :posts="posts" post-type="trash">
    <template #add-post>
      <!-- <ButtonRemoveTrash v-if="posts.length" /> -->
      <!-- <div class="hidden">
        <AddPostMenu />
      </div> -->
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';

import PageContent from 'src/components/template/PageContent.vue';
// import AddPostMenu from 'src/components/partials/menus/AddPostMenu.vue';
// import ButtonRemoveTrash from 'src/components/partials/partials/ButtonRemoveTrash.vue';

export default defineComponent({
  name: 'PageTrash',
  components: {
    PageContent,
    // AddPostMenu,
    // ButtonRemoveTrash,
  // },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.postsTrash);

    return { posts };
  },
});
</script>
