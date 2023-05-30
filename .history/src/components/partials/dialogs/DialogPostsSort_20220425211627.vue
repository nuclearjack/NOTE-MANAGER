<template>
  <q-dialog v-model="dialogPostsSort" square full-width>
    <q-card class="q-pl-sm" dark>
      <q-card-section class="row items-center q-pb-none">
        <div class="flex items-center text-body2">Сортировать по:</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="posts-filter">
        <q-list class="px-0">
          <q-item
            v-for="(item, key) in sortPostItems"
            :key="key"
            :active="sortValue === key"
            class="flex items-center text-body1 q-pl-none"
            clickable
            @click="onSortPosts(key)"
          >
            {{ item }}
            <q-icon
              v-if="sortValue === key && !sortReverse"
              name="mdi-sort-reverse-variant"
              size="sm"
              class="q-pl-md"
            />
            <q-icon
              v-if="sortValue === key && sortReverse"
              name="mdi-sort-variant"
              size="sm"
              class="q-pl-md"
            />
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePostSort } from 'src/setups/usePostSort';
import { useSettings } from 'src/setups/useSettings';
import { SORT_POST_ITEMS } from 'src/constants';

export default defineComponent({
  name: 'DialogPostAdd',
  setup(props) {
    const { dialogPostsSort, setDrawerBottom } = useSettings(props);
    const { sortValue, sortReverse, onSortPosts } = usePostSort(props);

    return {
      dialogPostsSort,
      sortValue,
      sortReverse,
      sortPostItems: SORT_POST_ITEMS,
      setDrawerBottom,
      onSortPosts,
    };
  },
});
</script>
