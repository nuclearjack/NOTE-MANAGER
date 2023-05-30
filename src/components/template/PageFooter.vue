<template>
  <q-footer>
    <q-tabs v-model="tab" indicator-color="white">
      <q-route-tab
        v-for="item in bottomMenu"
        :key="item.path"
        :name="item.name"
        :to="item.path"
      >
        <q-icon
          :name="item.icon"
          :color="item.path === route.fullPath ? 'white' : 'disabled'"
          size="sm"
        />
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import bottomMenu from 'src/constants/menus/bottomMenu';

const route = useRoute();
const tab = ref('Home');
</script>
