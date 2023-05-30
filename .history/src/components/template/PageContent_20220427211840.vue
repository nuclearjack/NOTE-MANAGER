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
    <slot name="add-post" />
    <router-view v-slot="{ Component }">
      <PageDialogBottom title="Новый аккаунт">
        <template #form>
          <component :is="Component" />
        </template>
      </PageDialogBottom>
    </router-view>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PAGE_BG_COLORS, POST_ICONS } from 'src/constants';
import { Post, Login } from 'src/components/models';
import PostCard from 'src/components/partials/cards/PostCard.vue';
import PageDialogBottom from 'src/components/template/PageDialogBottom.vue';

export type PostChild = Post[] | Login[];

export default defineComponent({
  name: 'PageContent',
  components: {
    PostCard,
    PageDialogBottom,
  },
  props: {
    posts: {
      type: Array as PropType<PostChild>,
      required: true,
    },
    postType: {
      type: String,
      default: 'default',
    },
  },
  setup(props) {
    const postsStore = usePostsStore();
    const sortValue = computed(() => postsStore.sortValue);
    const sortReverse = computed(() => postsStore.sortReverseValue);
    const postsSorted = computed(() => {
      const posts = [...props.posts].sort((a, b) => {
        if (typeof a[sortValue.value] === 'number') {
          return a[sortValue.value] - b[sortValue.value];
        }
        if (typeof a[sortValue.value] === 'string') {
          console.log(a[sortValue.value], b[sortValue.value]);
          return a[sortValue.value].localeCompare(b[sortValue.value]);
        }
      });
      return sortReverse.value ? [...posts].reverse() : posts;
    });
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
