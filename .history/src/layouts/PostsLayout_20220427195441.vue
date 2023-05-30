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

    <router-view name="post"></router-view>

    <DialogPostsSort />
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import DialogPostsSort from 'components/partials/dialogs/DialogPostsSort.vue';

export default defineComponent({
  name: 'PostsLayout',
  components: {
    DialogPostsSort,
  },
  setup() {
    const route = useRoute();

    return { route };
  },
});
</script>
