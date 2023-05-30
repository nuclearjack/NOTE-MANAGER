<template>
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

      <q-dialog v-model="showSort" square full-width>
        <q-card class="q-pl-sm" dark>
          <q-card-section class="row items-center q-pb-none">
            <div class="flex items-center text-body2">
              <q-icon name="sort" size="sm" class="q-pr-md" />
              Сортировать по:
            </div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="posts-filter">
            <q-list class="px-0">
              <q-item
                v-for="(item, key) in sortPostItems"
                :key="key"
                :active="sortValue === key"
                class="flex items-center text-body1 q-pl-none q-pr-sm"
                clickable
                @click="sortPosts(key)"
              >
                {{ item }}
                <q-icon name="mdi-arrow-down"></q-icon>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { useRoute } from 'vue-router';
import { SortPostsParameters } from 'src/components/models';
import { SORT_POST_ITEMS } from 'src/constants';

export default defineComponent({
  name: 'PageHeader',
  components: {},
  setup() {
    const postsStore = usePostsStore();
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const leftDrawerOpen = ref(false);
    const showSort = ref(false);

    const sortValue = computed(() => postsStore.sortValue);
    const sortReverse = computed(() => postsStore.sortReverseValue);

    const sortPosts = (value: keyof SortPostsParameters) => {
      postsStore.sortReverse();
      postsStore.setSortValue(value);
    };

    return {
      title,
      leftDrawerOpen,
      showSort,
      sortValue,
      sortReverse,
      sortPostItems: SORT_POST_ITEMS,
      sortPosts,
    };
  },
});
</script>

<style lang="scss" scoped>
.posts-filter {
  & .q-router-link--active {
    color: $green-5;
    font-weight: normal;
  }
}
</style>
