import { reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { Post, Login } from 'src/components/models';
import { uId } from 'src/utils';

export type PostChild = Post | Login;

export const usePostForm = () => {
  const postsStore = usePostsStore();
  const postData = reactive(postsStore.postCurrent ?? {}) as PostChild;

  const onCreate = (type = 'note') => {
    postsStore.save({
      ...postData,
      id: uId(),
      dateCreate: Date.now(),
      dateUpdate: Date.now(),
      type,
    });
  };

  const onEdit = () => {
    postsStore.update({
      ...postData,
      dateUpdate: Date.now(),
    });
  };

  const onSave = (type = 'note') => {
    postData.id ? onEdit() : onCreate(type);
    postsStore.setCurrent(null);
    postsStore.closeDialog();
  };

  const onTrash = () => {
    console.log('asdasdasd');
    postsStore.trashCurrent();
    postsStore.setCurrent(null);
    postsStore.closeDialog();
  };

  const onRestore = () => {
    postsStore.restoreCurrent();
    postsStore.setCurrent(null);
    postsStore.closeDialog();
  };

  const onRemove = () => {
    postsStore.removeCurrent();
    postsStore.setCurrent(null);
    postsStore.closeDialog();
  };

  const onRemoveTrash = () => {
    postsStore.removeTrash();
    postsStore.setCurrent(null);
  };

  const onReset = () => {
    for (const key in postData) {
      delete postData[key as keyof Post];
    }
  };

  return {
    postsStore,
    postData,
    onCreate,
    onEdit,
    onRemove,
    onTrash,
    onRestore,
    onSave,
    onReset,
    onRemoveTrash,
  };
};
