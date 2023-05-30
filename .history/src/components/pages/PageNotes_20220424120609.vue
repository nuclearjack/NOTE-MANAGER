<template>
  <q-page class="notes-page page-default row items-start q-pa-md">
    <q-icon name="mdi-apps" class="page-bg" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <AddPost />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PostCard from 'src/components/cards/PostCard.vue';
import AddPost from '../menus/AddPost.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    PostCard,
    AddPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsNotes);

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  & .page-bg {
    border: 5px solid $pink-5;
  }
}
</style>
