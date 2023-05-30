<template>
  <q-page class="notes-page page-default row items-start q-pa-md">
    <q-icon
      name="'mdi-note-outline'"
      class="page-bg"
    />
    <!-- Заметки -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotes',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  & .page-bg {
    border: 5px solid $pink-5;
  }
}
</style>
