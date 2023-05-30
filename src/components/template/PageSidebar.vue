<template>
  <q-list class="sidebar-left">
    <q-item class="sidebar-header">
      <q-item-section class="q-py-xs text-white">
        <q-item-label class="text-h5">{{ APP_NAME }}</q-item-label>
      </q-item-section>
    </q-item>

    <nav class="sidebar-list">
      <template v-for="(itemGroup, i) in sidebarMenu" :key="i">
        <q-separator class="q-mt-none q-mb-md" :class="{ 'q-mt-md': i }" />

        <q-item
          v-for="item in itemGroup"
          :key="item.link"
          :to="item.link"
          exact-active-class="exact-active"
          active-class="active"
          class="q-py-sm"
          clickable
        >
          <q-item-section class="text-h6">
            <div class="row items-center">
              <q-icon :name="item.icon" class="q-pr-md" />
              <span>{{ item.title }}</span>
            </div>
          </q-item-section>
        </q-item>
      </template>
    </nav>

    <q-item clickable class="q-mt-auto q-px-none">
      <q-toggle
        v-model="theme"
        icon="mdi-white-balance-sunny"
        size="lg"
        color="indigo-5"
      />
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from 'src/stores/global';
import { useQuasar } from 'quasar';

import { sidebarMenu } from 'src/constants/menus/sidebarMenu';
import { APP_NAME } from 'src/constants';

const $q = useQuasar();
const globalStore = useGlobalStore();
const theme = computed({
  get: () => $q.dark.isActive,
  set: () => {
    $q.dark.toggle();
    globalStore.setSetting('dark', $q.dark.isActive);
  },
});
</script>

<style lang="scss" scoped>
.sidebar-left {
  display: flex;
  flex-direction: column;
  height: 100%;
  & .sidebar-header {
    height: 50px;
    background-color: $primary;
  }
  & .exact-active {
    color: $primary;
    font-weight: bold;
  }
}
</style>
