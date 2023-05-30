<template>
  <PageIndex />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PageIndex from 'src/components/pages/PageIndex.vue';

export default defineComponent({
  components: {
    PageIndex,
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  & .page-bg {
    border: 5px solid $indigo-5;
  }
}
</style>
