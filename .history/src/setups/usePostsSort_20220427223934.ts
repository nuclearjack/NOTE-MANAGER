import { computed } from 'vue';
import { SortPostsParameters } from 'src/components/models';
import { usePostsStore } from 'src/stores/posts';
import { sortPosts } from 'src/utils';

export const usePostsSort = (props) => {
  const postsStore = usePostsStore();
  const sortValue = computed(() => postsStore.sortValue);
  const sortReverse = computed(() => postsStore.sortReverseValue);
  const postsSorted = computed(() => {
    const posts = [...props.posts].sort(sortPosts(sortValue));
    return sortReverse.value ? [...posts].reverse() : posts;
  });

  const onSortPosts = (value: keyof SortPostsParameters) => {
    postsStore.toggleSortReverse();
    postsStore.setSortValue(value);
  };

  return {
    usePostsSort,
    onSortPosts,
    postsStore,
    sortValue,
    sortReverse,
    postsSorted,
  };
};
