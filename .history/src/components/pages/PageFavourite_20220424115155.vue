<template>
  <q-page class="favourite-page page-default row items-start q-pa-md">
    <q-icon name="mdi-star" class="page-bg" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <AddPostMenu />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PostCard from 'src/components/cards/PostCard.vue';
import AddPostMenu from 'components/menus/AddPostMenu.vue';

export default defineComponent({
  name: 'PageFavourite',
  components: {
    PostCard,
    AddPostMenu,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLiked);

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.favourite-page {
  & .page-bg {
    border: 5px solid $yellow-8;
  }
}
</style>
