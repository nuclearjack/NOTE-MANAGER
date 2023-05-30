import { computed, ref } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { Post, SortPostsParameters } from 'src/components/models';
import { uId } from 'src/utils';

export const usePosts = (posts?: Post[]) => {
  const postsStore = usePostsStore();

  const postCurrent = computed(() => postsStore.postCurrent as Post);
  const sortValue = computed(() => postsStore.sortValue);
  const sortReverse = computed(() => postsStore.sortReverse);
  const loading = ref(postsStore.loading);

  const dialog = computed({
    get: () => postsStore.dialog,
    set: (value) => postsStore.setDialog(value),
  });

  const postsSorted = computed(() => {
    if (!posts) {
      return [];
    }

    const sorted = [...posts].sort(sortPosts(sortValue.value));
    return sortReverse.value ? [...sorted].reverse() : sorted;
  });

  const onCreate = () => {
    postsStore.save({
      ...postCurrent.value,
      id: uId(),
      dateCreate: Date.now(),
      dateUpdate: Date.now(),
    });

    postsStore.setDialog(false);
    postsStore.setCurrent(null);
  };

  const onEdit = () => {
    postsStore.update({
      ...postCurrent.value,
      dateUpdate: Date.now(),
    });

    postsStore.setDialog(false);
    postsStore.setCurrent(null);
  };

  const onSave = () => {
    postCurrent.value?.id ? onEdit() : onCreate();
  };

  const onLike = () => {
    postCurrent.value.like = !postCurrent.value?.like ?? false;
    postsStore.update(postCurrent.value);
  };

  const onDelete = () => {
    postCurrent.value?.trash
      ? postsStore.removeCurrent()
      : postsStore.trashCurrent();

    postsStore.setCurrent(null);
    postsStore.setDialog(false);
  };

  const onRemoveTrash = () => {
    postsStore.removeTrash();
    postsStore.setCurrent(null);
  };

  const onRestore = () => {
    postsStore.restoreCurrent();
    postsStore.setCurrent(null);
    postsStore.setDialog(false);
  };

  const onShowPost = (post: Post = {} as Post) => {
    postsStore.setCurrent(post);
    postsStore.setDialog(true);
  };

  const sortPosts =
    (sortValue: keyof SortPostsParameters) =>
    (a: Post, b: Post): number => {
      if (typeof a[sortValue] === 'number') {
        return Number(a[sortValue]) - Number(b[sortValue]);
      }
      return String(a[sortValue]).localeCompare(String(b[sortValue]));
    };

  const onSortPosts = (value: keyof SortPostsParameters) => {
    postsStore.sortValue === value
      ? postsStore.setSortReverse(!postsStore.sortReverse)
      : postsStore.setSortReverse(true);

    postsStore.setSortValue(value);
  };

  return {
    postsStore,
    postCurrent,
    postsSorted,
    sortValue,
    sortReverse,
    dialog,
    loading,
    onCreate,
    onEdit,
    onRestore,
    onSave,
    onLike,
    onRemoveTrash,
    onDelete,
    onShowPost,
    onSortPosts,
  };
};
