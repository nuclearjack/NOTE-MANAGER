<template>
  <PageContent :posts="posts">
    {{ posts }}
    <ButtonTrashRemove v-if="posts.length" :trash="true" />
    <div class="hidden">
      <AddPostMenu />
    </div>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';

import PageContent from 'src/components/template/PageContent.vue';
import AddPostMenu from 'src/components/partials/menus/AddPostMenu.vue';
import ButtonTrashRemove from 'src/components/partials/ButtonTrashRemove.vue';

export default defineComponent({
  name: 'PageTrash',
  components: {
    PageContent,
    AddPostMenu,
    ButtonTrashRemove,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.postsTrash);

    return { posts };
  },
});
</script>
