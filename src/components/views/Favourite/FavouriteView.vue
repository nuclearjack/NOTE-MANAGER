<template>
  <q-page class="page-default row items-start q-pa-sm">
    <FavouriteRender />

    <PostsSortTypes />

    <PostFormDialog />
  </q-page>
</template>

<script setup lang="ts">
import PostFormDialog from 'components/posts/PostFormDialog.vue';
import PostsSortTypes from 'src/components/posts/PostsSortTypes.vue';
import FavouriteRender from './FavouriteRender.vue';
</script>
