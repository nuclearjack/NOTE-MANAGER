<template>
  <q-toolbar class="post-toolbar">
    <q-btn
      aria-label="Menu"
      icon="close"
      round
      dense
      flat
      @click="dialog = false"
    />

    <q-space />

    <template v-if="postCurrent?.id">
      <q-btn
        :color="postCurrent?.like ? 'yellow-9' : 'disabled'"
        :icon="postCurrent?.like ? 'mdi-star' : 'mdi-star-outline'"
        class="q-mr-sm"
        aria-label="Menu"
        round
        dense
        flat
        @click="onLike"
      />

      <q-btn
        class="q-mr-sm"
        icon="mdi-delete-outline"
        round
        dense
        flat
        @click="$emit('show-confirm', true)"
      />
    </template>

    <q-btn icon="mdi-check" round dense flat @click="onSave()" />
  </q-toolbar>
</template>

<script setup lang="ts">
import { usePosts } from 'src/setups/usePosts';

defineEmits(['show-confirm']);

const { dialog, postCurrent, onSave, onLike } = usePosts();
</script>
