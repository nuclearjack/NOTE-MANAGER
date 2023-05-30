import { computed } from 'vue';
import { SortPostsParameters } from 'src/components/models';
import { usePostsStore } from 'src/stores/posts';
import { sortPosts } from 'src/utils';

export const usePostsSort = (props) => {
  const postsStore = usePostsStore();
  const posts = computed(() => postsStore.posts);
  const sortValue = computed(() => postsStore.sortValue);
  const sortReverse = computed(() => postsStore.sortReverseValue);

  const postsSorted = computed(() => {
    const sorted = [posts.value].sort(sortPosts(sortValue.value));
    return sortReverse.value ? [...sorted].reverse() : sorted;
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
