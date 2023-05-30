<template>
  <q-dialog v-model="showSort" square full-width>
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
            @click="sortPosts(key)"
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
import { defineComponent, computed } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'DialogPostAdd',
  props: {
    title: {
      type: String,
      default: 'Новая запись',
    },
  },
  setup() {
    const postsStore = usePostsStore();
    const showDialog = computed(() => postsStore.dialog);
    const currentType = computed(() => postsStore.formType);

    const onDialogHide = () => {
      postsStore.setCurrent(null);
      postsStore.closeDialog();
    };

    return {
      showDialog,
      currentType,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      onDialogHide,
    };
  },
});
</script>
