import { reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PostStateInterface } from 'src/components/models';
import { uId } from 'src/utils';

export const usePostForm = () => {
  const postsStore = usePostsStore();

  const noteData = reactive(postsStore.postCurrent ?? {}) as PostStateInterface;

  const onCreate = () => {
    postsStore.save({ ...noteData, id: uId(), type: 'note' });
    postsStore.close();
  };

  const onEdit = () => {
    postsStore.update(noteData);
    postsStore.close();
  };

  const onSave = () => {
    noteData.id ? onEdit() : onCreate();
    postsStore.snapShot();
  };

  const onRemove = () => {
    postsStore.removeCurrent();
    postsStore.close();
    postsStore.snapShot();
  };

  const onReset = () => {
    for (const key in noteData) {
      delete noteData[key as keyof PostStateInterface];
    }
  };

  return {
    noteData,
    onCreate,
    onEdit,
    onRemove,
    onSave,
    onReset,
  };
};
