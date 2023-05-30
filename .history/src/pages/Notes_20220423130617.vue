<template>
  <PageNotes />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageNotes from 'src/components/pages/PageNotes.vue';

export default defineComponent({
  name: 'AppNotes',
  components: {
    PageNotes,
  },
});
</script>
