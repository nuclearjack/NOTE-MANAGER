<template>
  <q-dialog v-model="dialogPostsSort" square full-width>
    <q-card dark>
      <q-card-section class="row items-center q-pb-none q-pl-lg">
        <div class="flex items-center text-h6">{{ title }}</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="dialogPostsSort = !dialogPostsSort"
        />
      </q-card-section>

      <q-card-section class="posts-filter">
        <q-list class="q-px-0">
          <q-item
            v-for="(item, key) in sortPostItems"
            :key="key"
            :active="sortValue === key"
            class="flex items-center text-body1 q-pl-sm"
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
import { defineComponent, ref } from 'vue';
import { usePostsSort } from 'src/setups/usePostsSort';
import { useSettings } from 'src/setups/useSettings';
import { SORT_POST_ITEMS } from 'src/constants';

export default defineComponent({
  name: 'DialogPostsSort',
  setup(props) {
    const { dialogPostsSort } = useSettings();
    const { sortValue, sortReverse, onSortPosts } = usePostsSort(props);
    const title = ref('Сортировать по: ');

    return {
      title,
      dialogPostsSort,
      sortValue,
      sortReverse,
      sortPostItems: SORT_POST_ITEMS,
      onSortPosts,
    };
  },
});
</script>

<style lang="scss" scoped>
.posts-filter {
  & .q-router-link--active {
    color: $green-5;
    font-weight: bolder;
  }
}
</style>
