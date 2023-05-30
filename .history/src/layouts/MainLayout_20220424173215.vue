<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          icon="menu"
          round
          dense
          flat
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>{{ title }}</q-toolbar-title>

        <!-- <q-btn flat dense round icon="search" aria-label="Search" /> -->

        <q-btn
          flat
          dense
          round
          icon="sort"
          aria-label="Sort"
          @click="showSort = !showSort"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-dark">
      <SidebarLeft />
    </q-drawer>

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
    </q-page-container>

    <q-dialog v-model="showSort" square full-width>
      <q-card dark>
        <q-card-section class="row items-center q-pb-none">
          <div class="flex items-center text-body2">
            <q-icon name="sort" class="q-pr-sm" />
            Сортировать по:
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item
              v-for="(item, key) in sortPostItems"
              :key="key"
              clickable
              @click="sortPosts(key)"
            >
              {{ item }}
              {{ key }}
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-footer elevated class="bg-grey-8 text-white">
      <BottomMenu />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePostsStore } from 'src/stores/posts';
import { SORT_POST_ITEMS } from 'src/constants';
import { SortPostsParameters } from 'src/components/models';
import SidebarLeft from 'src/components/partials/menus/SidebarLeft.vue';
import BottomMenu from 'src/components/partials/menus/BottomMenu.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    SidebarLeft,
    BottomMenu,
  },
  setup() {
    const postsStore = usePostsStore();
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const leftDrawerOpen = ref(false);
    const showSort = ref(false);
    const sortPosts = (value: keyof SortPostsParameters) => {
      postsStore.sortReverse();
      postsStore.setSortValue(value);
    };

    return {
      route,
      title,
      leftDrawerOpen,
      showSort,
      sortPostItems: SORT_POST_ITEMS,
      sortPosts,
    };
  },
});
</script>
