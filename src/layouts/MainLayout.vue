<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="relative-position">
      <PageHeader />

      <q-drawer v-model="drawerLeft" :width="300">
        <PageSidebar />
      </q-drawer>

      <router-view :key="route.path" v-slot="{ Component }">
        <transition
          enter-active-class="animated"
          leave-active-class="animated"
          appear
        >
          <component :is="Component" />
        </transition>
      </router-view>

      <PageFooter />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useGlobal } from 'src/setups/useGlobal';

import PageHeader from 'src/components/template/PageHeader.vue';
import PageFooter from 'src/components/template/PageFooter.vue';
import PageSidebar from 'src/components/template/PageSidebar.vue';

const route = useRoute();
const { drawerLeft } = useGlobal();
</script>

<style lang="scss">
.loader {
  position: absolute;
  top: 50vh;
  left: 50%;
}
</style>
