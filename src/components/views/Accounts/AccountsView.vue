<template>
  <q-page class="page-default row items-start q-pa-sm">
    <AccountsRender />

    <PostFormDialog />

    <PostsSortType />

    <q-btn
      icon="mdi-plus"
      class="btn-add-post"
      size="lg"
      round
      @click="onShowAccountPost"
    />
  </q-page>
</template>

<script setup lang="ts">
import { usePosts } from 'src/setups/usePosts';
import { Account } from 'src/components/models';
import PostFormDialog from 'components/posts/PostFormDialog.vue';
import PostsSortType from 'src/components/posts/PostsSortType.vue';
import AccountsRender from './AccountsRender.vue';

const { onShowPost } = usePosts();

const onShowAccountPost = () => {
  onShowPost({ type: 'login' } as Account);
};
</script>
