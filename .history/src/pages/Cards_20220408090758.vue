<template>
  <q-page class="cards-page page-default row items-start q-pa-md">
    <q-icon
      name="mdi-credit-card-multiple-outline"
      class="page-bg"
    />
    <!-- Карты -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageCards',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.cards-page {
  & .page-bg {
    border: 5px solid $orange-4;
  }
}
</style>
