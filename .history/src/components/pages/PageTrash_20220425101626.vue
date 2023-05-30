<template>
  <PageContent :posts="posts" post-type="trash">
    <template #add-post>
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

export default defineComponent({
  name: 'PageTrash',
  components: {
    PageContent,
    AddPostMenu,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.postsTrash);
    console.log(posts.value);

    return { posts };
  },
});
</script>
