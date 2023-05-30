<template>
  <NotesView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotesView from 'components/views/Notes/NotesView.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    NotesView,
  },
});
</script>
