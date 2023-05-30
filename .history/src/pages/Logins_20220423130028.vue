<template>
  <PageLogins />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLogins from 'src/components/pages/PageLogins.vue';

export default defineComponent({
  name: 'PageLogins',
  components: {
    PageLogins,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.logins-page {
  & .page-bg {
    border: 5px solid $lime-6;
  }
}
</style>
