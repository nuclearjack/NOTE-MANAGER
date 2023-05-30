<template>
  <PostDialog>
    <template #toolbar>
      <PostToolbar @show-confirm="showConfirm = $event" />
    </template>

    <template #default>
      <component :is="PostForms[postCurrent.type]" />
    </template>

    <template #confirm>
      <PostTrashConfirm v-model:show="showConfirm" />
    </template>
  </PostDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePosts } from 'src/setups/usePosts';

import PostDialog from 'components/posts/PostDialog.vue';
import PostToolbar from 'components/posts/PostToolbar.vue';
import PostTrashConfirm from 'components/posts/PostTrashConfirm.vue';

import AccountForm from 'components/views/Accounts/AccountForm.vue';
import NoteForm from 'components/views/Notes/NoteForm.vue';

defineEmits(['show-confirm']);

const { postCurrent } = usePosts();

const PostForms = {
  login: AccountForm,
  note: NoteForm,
};

const showConfirm = ref(false);
</script>
