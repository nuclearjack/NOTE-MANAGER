<template>
  <HomeView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeView from 'components/views/Home/HomeView.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    HomeView,
  },
});
</script>
