<template>
  <PageLogins />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLogins from 'src/components/pages/PageLogins.vue';

export default defineComponent({
  name: 'AppLogins',
  components: {
    PageLogins,
  },
});
</script>
