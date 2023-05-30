<template>
  <q-page
    class="page-default row items-start q-pa-md"
    :style="{ border: `5px solid ${postColors[postType]}` }"
  >
    <q-icon :name="postColors[postType]" />
    <q-list class="full-width">
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
    </q-list>
    <slot name="add-post" />
  </q-page>
</template>

<script lang="ts">
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { defineComponent, PropType } from 'vue';
import { Post, Login } from 'src/components/models';
import PostCard from 'src/components/cards/PostCard.vue';

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
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
    };
  },
});
</script>
