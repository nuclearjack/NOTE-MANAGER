<template>
  <q-page class="cards-page page-default row items-start q-pa-md">
    <q-icon name="mdi-apps" class="page-bg" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <AddPost post-type="card" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PostCard from 'src/components/cards/PostCard.vue';
import AddPost from 'components/menus/AddPost.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    PostCard,
    AddPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsCards);

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.cards-page {
  & .page-bg {
    border: 5px solid $orange-5;
  }
}
</style>
