<template>
  <q-header elevated>
    <q-toolbar class="post-toolbar">
      <q-btn
        aria-label="Menu"
        icon="menu"
        dense
        round
        flat
        @click="drawerLeft = !drawerLeft"
      />

      <q-toolbar-title>{{ title }}</q-toolbar-title>

      <q-btn
        aria-label="Sort"
        icon="sort"
        dense
        round
        flat
        @click="dialogPostsSortType = !dialogPostsSortType"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGlobal } from 'src/setups/useGlobal';

const route = useRoute();
const title = computed(() => route.meta.title);

const { drawerLeft, dialogPostsSortType } = useGlobal();
</script>
