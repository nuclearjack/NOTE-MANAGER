<template>
  <q-list class="full-width">
    <transition-group
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <PostCard
        v-for="post in postsSorted"
        :key="post.id"
        :post="post"
        @post-click="onShowPost(post)"
      />
    </transition-group>
  </q-list>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePosts } from 'src/setups/usePosts';
import PostCard from 'components/posts/PostCard.vue';

const { postsStore, onShowPost } = usePosts();

const posts = computed(() => postsStore.postsLogins);

const { postsSorted } = usePosts(posts.value);
</script>
