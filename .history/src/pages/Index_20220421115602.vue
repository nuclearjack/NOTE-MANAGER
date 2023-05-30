<template>
  <PageIndex />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageIndex from 'src/components/pages/PageIndex.vue';

export default defineComponent({
  name: 'AppHome',
  components: {
    PageIndex,
  },
});
</script>
