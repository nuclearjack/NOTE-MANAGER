<template>
  <FavouriteView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FavouriteView from 'components/views/Favourite/FavouriteView.vue';

export default defineComponent({
  name: 'PageFavourite',
  components: {
    FavouriteView,
  },
});
</script>
