<template>
  <q-page-container>
    <router-view :key="route.path" v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated"
        leave-active-class="animated"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view name="sort" />
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'PostsLayout',
  setup() {
    const route = useRoute();

    return { route };
  },
});
</script>
