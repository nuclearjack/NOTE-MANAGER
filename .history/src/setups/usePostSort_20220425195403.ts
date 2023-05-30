import { computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { SortPostsParameters } from 'src/components/models';

export const usePostSort = (props) => {
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
