<template>
  <PageCards />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageCards from 'src/components/pages/PageCards.vue';

export default defineComponent({
  name: 'AppCards',
  components: {
    PageCards,
  },
});
</script>
