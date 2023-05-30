import { computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { SortPostsParameters } from 'src/components/models';

export const usePostSort = () => {
  const postsStore = usePostsStore();

  const sortValue = computed(() => postsStore.sortValue);
  const sortReverse = computed(() => postsStore.sortReverseValue);

  const sortPosts = (value: keyof SortPostsParameters) => {
    postsStore.toggleSortReverse();
    postsStore.setSortValue(value);
  };

  return {
    sortValue,
    sortReverse,
    sortPosts,
  };
};
