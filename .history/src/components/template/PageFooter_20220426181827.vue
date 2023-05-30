<template>
  <q-footer elevated class="bg-grey-8 text-white">
    <BottomMenu />
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BottomMenu from 'src/components/partials/menus/BottomMenu.vue';
export default defineComponent({
  name: 'PageFooter',
  components: {
    BottomMenu,
  },
});
</script>
