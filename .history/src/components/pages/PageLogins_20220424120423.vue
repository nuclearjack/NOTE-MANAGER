<template>
  <q-page class="logins-page page-default row items-start q-pa-md">
    <q-icon name="mdi-key" class="page-bg" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <AddPost post-type="logins" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PostCard from 'src/components/cards/PostCard.vue';

export default defineComponent({
  name: 'PageLogins',
  components: {
    PostCard,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLogins);

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.logins-page {
  & .page-bg {
    border: 5px solid $teal-14;
  }
}
</style>
