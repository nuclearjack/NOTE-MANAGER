<template>
  <q-page class="page-default row items-start q-pa-sm">
    <HomeRender :posts="posts" />

    <PostsSortTypes />

    <PostFormDialog />

    <HomePostButton />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePosts } from 'src/setups/usePosts';
import PostFormDialog from 'components/posts/PostFormDialog.vue';
import PostsSortTypes from 'src/components/posts/PostsSortTypes.vue';
import HomeRender from './HomeRender.vue';
import HomePostButton from './HomePostButton.vue';

const { postsStore } = usePosts();
const posts = computed(() => postsStore.posts);
</script>
