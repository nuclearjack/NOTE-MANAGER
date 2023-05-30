import { computed } from 'vue';
import { SortPostsParameters } from 'src/components/models';
import { usePostsStore } from 'src/stores/posts';
import { sortPosts } from 'src/utils';

export const usePostsSort = () => {
  const postsStore = usePostsStore();
  const sortValue = computed(() => postsStore.sortValue);
  const sortReverse = computed(() => postsStore.sortReverseValue);

  const postsSorted = (posts) =>
    computed(() => {
      const sorted = posts.sort(sortPosts(sortValue.value));
      return sortReverse.value ? [...sorted].reverse() : sorted;
    });

  const onSortPosts = (value: keyof SortPostsParameters) => {
    postsStore.toggleSortReverse();
    postsStore.setSortValue(value);
  };

  return {
    usePostsSort,
    onSortPosts,
    postsSorted,
    postsStore,
    sortValue,
    sortReverse,
  };
};
