<template>
  <PageTrash />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTrash from 'src/components/pages/PageTrash.vue';

export default defineComponent({
  name: 'AppTrash',
  components: {
    PageTrash,
  },
});
</script>
