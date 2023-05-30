<template>
  <PageFavourite />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageFavourite from 'src/components/pages/PageFavourite.vue';

export default defineComponent({
  name: 'AppHome',
  components: {
    PageFavourite,
  },
});
</script>
