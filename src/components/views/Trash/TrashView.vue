<template>
  <q-page class="page-default row items-start q-pa-sm">
    <TrashRender />

    <PostFormDialog />

    <PostsSortTypes />

    <TrashConfirm v-model:show="showConfirm" />

    <q-btn
      icon="mdi-delete-forever"
      color="deep-orange-6"
      class="btn-add-post"
      size="lg"
      round
      @click="showConfirm = true"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PostFormDialog from 'components/posts/PostFormDialog.vue';
import PostsSortTypes from 'src/components/posts/PostsSortTypes.vue';
import TrashRender from './TrashRender.vue';
import TrashConfirm from './TrashConfirm.vue';

const showConfirm = ref(false);
</script>
