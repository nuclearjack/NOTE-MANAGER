<template>
  <q-page class="page-default row items-start q-pa-sm">
    <NotesRender />

    <PostFormDialog />

    <PostsSortType />

    <q-btn
      class="btn-add-post"
      icon="mdi-plus"
      size="lg"
      round
      @click="onShowNotePost"
    />
  </q-page>
</template>

<script setup lang="ts">
import { usePosts } from 'src/setups/usePosts';
import { Note } from 'src/components/models';
import PostFormDialog from 'components/posts/PostFormDialog.vue';
import PostsSortType from 'src/components/posts/PostsSortType.vue';
import NotesRender from './NotesRender.vue';

const { onShowPost } = usePosts();

const onShowNotePost = () => {
  onShowPost({ type: 'note' } as Note);
};
</script>
