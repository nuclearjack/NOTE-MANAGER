import { reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { Post, Login } from 'src/components/models';
import { uId } from 'src/utils';

export const usePostForm = () => {
  const postsStore = usePostsStore();

  const noteData = reactive(postsStore.postCurrent ?? {}) as Post | Login;

  const onCreate = (type = 'note') => {
    postsStore.save({
      ...noteData,
      id: uId(),
      dateCreate: Date.now(),
      dateUpdate: Date.now(),
      type,
    });
  };

  const onEdit = () => {
    console.log({
      ...noteData,
      dateUpdate: Date.now(),
    });
    postsStore.update({
      ...noteData,
      dateUpdate: Date.now(),
    });
  };

  const onSave = (type = 'note') => {
    noteData.id ? onEdit() : onCreate(type);
    postsStore.setCurrent(null);
    postsStore.closeDialog();
    postsStore.snapShot();
  };

  const onRemove = () => {
    postsStore.removeCurrent();
    postsStore.setCurrent(null);
    postsStore.closeDialog();
    postsStore.snapShot();
  };

  const onReset = () => {
    for (const key in noteData) {
      delete noteData[key as keyof Post];
    }
  };

  return {
    postsStore,
    noteData,
    onCreate,
    onEdit,
    onRemove,
    onSave,
    onReset,
  };
};
