<template>
  <TrashView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TrashView from 'components/views/Trash/TrashView.vue';

export default defineComponent({
  name: 'PageFavourite',
  components: {
    TrashView,
  },
});
</script>
