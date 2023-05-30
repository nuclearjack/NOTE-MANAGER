<template>
  <q-dialog v-model="dialogPostsSortType" class="posts-sort" full-width square>
    <q-card>
      <q-card-section class="row items-center q-pb-none q-pl-lg">
        <b>{{ POST_SORT_TITLE }}</b>

        <q-space />

        <q-btn
          icon="close"
          flat
          round
          dense
          @click="dialogPostsSortType = !dialogPostsSortType"
        />
      </q-card-section>

      <q-card-section class="posts-filter">
        <q-list class="q-px-0">
          <q-item
            v-for="(item, key) in POST_SORT_ITEMS_TYPE"
            :key="key"
            :active="sortValue === key"
            class="flex items-center q-mb-xs q-pl-sm"
            clickable
            @click="onSortPosts(key)"
          >
            {{ item }}

            <q-icon
              v-if="sortValue === key"
              :name="
                sortReverse ? 'mdi-sort-variant' : 'mdi-sort-reverse-variant'
              "
              size="sm"
              class="q-pl-md"
            />
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { usePosts } from 'src/setups/usePosts';
import { useGlobal } from 'src/setups/useGlobal';
import { POST_SORT_ITEMS_TYPE } from 'src/constants';
import { POST_SORT_TITLE } from 'src/constants/lang';

const { dialogPostsSortType } = useGlobal();
const { sortValue, sortReverse, onSortPosts } = usePosts();
</script>

<style lang="scss">
.posts-sort {
  .posts-filter {
    & .q-router-link--active {
      color: $primary;
      font-weight: bolder;
    }
  }
}
</style>
