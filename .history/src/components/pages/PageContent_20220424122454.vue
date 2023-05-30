<template>
  <q-page
    class="page-default row items-start q-pa-md"
    :style="{ border: `5px solid ${postColors[postType]}` }"
  >
    <q-icon name="mdi-apps" class="page-bg" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <AddPostMenu />
  </q-page>
</template>

<script lang="ts">
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PostCard from 'src/components/cards/PostCard.vue';
import AddPostMenu from 'components/menus/AddPostMenu.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    PostCard,
    AddPostMenu,
  },
  props: {
    postType: {
      type: String,
      default: 'note',
    },
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);

    return {
      posts,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
    };
  },
});
</script>
