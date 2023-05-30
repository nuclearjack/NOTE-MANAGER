<template>
  <PageContent :posts="posts" post-type="favourite" />
  <div class="hidden">
    <AddPostMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import AddPostMenu from 'src/components/partials/menus/AddPostMenu.vue';

export default defineComponent({
  name: 'PageFavourite',
  components: {
    PageContent,
    AddPostMenu,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLiked);

    return { posts };
  },
});
</script>
