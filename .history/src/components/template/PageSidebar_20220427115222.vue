<template>
  <q-list class="sidebar-left" dark>
    <q-item>
      <q-item-section class="q-pt-xs">
        <q-item-label class="text-h5">Заметки</q-item-label>
      </q-item-section>
    </q-item>
    <nav class="sidebar-list">
      <template v-for="(routeGroup, i) in routes" :key="i">
        <q-separator dark class="q-mt-none q-mb-md" :class="{ 'q-mt-md': i }" />
        <q-item
          v-for="route in routeGroup"
          :key="route.link"
          :to="route.link"
          exact-active-class="exact-link"
          active-class="active-link"
          class="sidebar-link"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon :name="route.icon" />
          </q-item-section>

          <q-item-section class="text-subtitle1">
            {{ route.title }}
          </q-item-section>
        </q-item>
      </template>
    </nav>

    <!-- <q-item clickable v-ripple class="q-mt-auto q-px-none">
      <q-btn flat round size="24px" icon="mdi-cog" />
      <q-btn flat round size="24px" icon="mdi-lock" class="q-ml-auto" />
    </q-item> -->
    <q-item clickable v-ripple class="q-mt-auto q-px-none">
      <q-icon name="mdi-sun"></q-icon>
      <q-toggle size="lg" v-model="theme" color="green" />
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { sidebarMenu } from 'src/constants/menus/sidebarMenu';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PageSidebar',
  setup() {
    const routes = ref(sidebarMenu);
    const $q = useQuasar();
    const theme = computed({
      get: () => $q.dark.isActive,
      set: () => $q.dark.toggle(),
    });

    return { routes, theme };
  },
});
</script>

<style lang="scss">
.sidebar-left {
  display: flex;
  flex-direction: column;
  height: 100%;
  & .sidebar-header {
    background: linear-gradient(186.93deg, #0ddf3b 0%, #010218 83.31%);
  }
  & .sidebar-list {
    & .exact-link {
      color: yellow;
    }
  }
}
</style>
