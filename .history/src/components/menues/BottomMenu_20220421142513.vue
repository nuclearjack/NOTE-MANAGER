<template>
  <q-tabs v-model="tab" indicator-color="transparent" class="bg-dark">
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
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import bottomMenu from '../../menues/bottomMenu';

export default defineComponent({
  name: 'BottomMenu',
  setup() {
    const route = useRoute();
    const routes = ref(bottomMenu);
    const tab = ref('Home');
    const routeFullPath = computed(() => route.fullPath);

    const isActiveRoute = (path: string) => routeFullPath.value === path;

    return { routes, tab, isActiveRoute };
  },
});
</script>
