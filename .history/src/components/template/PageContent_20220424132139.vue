<template>
  <q-page class="page-default row items-start q-pa-md">
    <q-icon
      class="page-bg"
      :name="postIcons[postType]"
      :style="{ border: `5px solid ${bgColors[postType]}` }"
    />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <slot name="add-post" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PAGE_BG_COLORS, POST_ICONS } from 'src/constants';
import { Post, Login } from 'src/components/models';
import PostCard from 'src/components/partials/cards/PostCard.vue';

export default defineComponent({
  name: 'PageContent',
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array as PropType<Post[] | Login[]>,
      required: true,
    },
    postType: {
      type: String,
      default: 'default',
    },
  },
  setup() {
    return {
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
