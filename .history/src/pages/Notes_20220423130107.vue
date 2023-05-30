<template>
  <PageNotes />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageNotes from 'src/components/pages/PageNotes.vue';

export default defineComponent({
  name: 'PageNotes',
  components: {
    PageNotes,
  },
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
