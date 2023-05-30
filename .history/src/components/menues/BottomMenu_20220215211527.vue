<template>
  <q-tabs
    v-model="tab"
    indicator-color="transparent"
    class="bg-dark"
  >
    <q-route-tab
      v-for="route in routes"
      :key="route.path"
      :name="route.name"
      :to="route.path"
    >
      <q-icon
        :name="route.icon"
        size="sm"
        :color="isActiveRoute(route.path) ? route.color : 'white'"
      />
    </q-route-tab>
  </q-tabs>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { iBottomMenuItem } from 'components/models';

import {
  defineComponent,
  ref,
  PropType,
  computed,
} from 'vue';

export default defineComponent({
  name: 'BottomMenu',
  props: {
    routes: {
      type: Array as PropType<Array<iBottomMenuItem>>,
      required: true,
    },
  },
  setup() {
    const route = useRoute();
    const tab = ref('Home');
    const routeFullPath = computed(() => route.fullPath);

    const isActiveRoute = (path: string) => routeFullPath.value === path;

    return { tab, isActiveRoute };
  },
});
</script>
