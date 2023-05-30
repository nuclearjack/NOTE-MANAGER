<template>
  <q-dialog
    v-model="dialog"
    class="post-dialog"
    position="bottom"
    maximized
    square
  >
    <q-card class="post-dialog-card q-mt-auto full-width">
      <slot name="toolbar" />

      <slot name="confirm" />

      <q-card-section>
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { usePosts } from 'src/setups/usePosts';

defineEmits(['show-confirm']);

const { dialog } = usePosts();
</script>

<style lang="scss">
.post-dialog-card {
  background-color: #ffffff;
}
</style>
