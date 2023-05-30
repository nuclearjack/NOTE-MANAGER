<template>
  <q-page class="logins-page page-default row items-start q-pa-md">
    <q-icon
      name="mdi-login-variant"
      class="page-bg"
    />
    <!-- Логины -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLogins',
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
