<template>
  <q-page class="page-default row items-start q-pa-md">
    <q-icon
      class="page-bg"
      :name="postIcons[postType]"
      :style="{ border: `5px solid ${bgColors[postType]}` }"
    />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in postsSorted" :key="i" :post="post" />
    </q-list>
    <slot />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PAGE_BG_COLORS, POST_ICONS } from 'src/constants';
import { usePostsSort } from 'src/setups/usePostsSort';
import PostCard from 'src/components/partials/cards/PostCard.vue';

export default defineComponent({
  name: 'PageContent',
  components: {
    PostCard,
  },
  props: {
    postType: {
      type: String,
      default: 'default',
    },
  },
  setup() {
    const { postsSorted } = usePostsSort();

    return {
      postsSorted,
      bgColors: PAGE_BG_COLORS,
      postIcons: POST_ICONS,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-bg {
  position: absolute;
  top: calc(50% - 90px);
  left: calc(50% - 90px);
  font-size: 120px;
  border-radius: 50%;
  border: 5px solid $indigo-5;
  padding: 25px;
}
</style>
