<template>
  <q-list class="sidebar-left" dark>
    <!-- <q-item
      clickable
      v-ripple
      class="sidebar-header column q-py-xl"
    >
      <q-item-section
        avatar
        class="q-mb-md"
      >
        <q-avatar
          flip
          size="64px"
        >
          <img src="https://cdn.quasar.dev/img/avatar.png" alt="Avatar" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-h6">
          John Doe
        </q-item-label>
        <q-item-label caption>
          8 (800) 555-35-35
        </q-item-label>
      </q-item-section>
    </q-item> -->
    <q-item>
      <q-item-section class="q-py-sm">
        <q-item-label class="text-h5">Note App</q-item-label>
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

    <q-item clickable v-ripple class="q-mt-auto q-px-none">
      <q-btn flat round size="24px" icon="mdi-cog" />
      <q-btn flat round size="24px" icon="mdi-lock" class="q-ml-auto" />
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { iSidebarMenuItem } from 'components/models';

export default defineComponent({
  name: 'SidebarLeft',
  props: {
    routes: {
      type: Array as PropType<Array<Array<iSidebarMenuItem>>>,
      required: true,
    },
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
