import { computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { SortPostsParameters } from 'src/components/models';

export const postsSort = (a, b) => {
  if (typeof a[sortValue.value] === 'number') {
    return a[sortValue.value] - b[sortValue.value];
  }
  if (typeof a[sortValue.value] === 'string') {
    return a[sortValue.value].localeCompare(b[sortValue.value]);
  }
};

export const usePostSort = (props) => {
  const postsStore = usePostsStore();
  const sortValue = computed(() => postsStore.sortValue);
  const sortReverse = computed(() => postsStore.sortReverseValue);
  const postsSorted = computed(() => {
    const posts = [...props.posts].sort(postsSort);
    return sortReverse.value ? [...posts].reverse() : posts;
  });

  const onSortPosts = (value: keyof SortPostsParameters) => {
    postsStore.toggleSortReverse();
    postsStore.setSortValue(value);
  };

  return {
    sortValue,
    sortReverse,
    postsSorted,
    onSortPosts,
  };
};
