import { reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PostStateInterface } from 'src/components/models';
import { uId } from 'src/utils';

export const usePostForm = () => {
  const postsStore = usePostsStore();

  const noteData = reactive(postsStore.postCurrent ?? {}) as PostStateInterface;

  const onCreate = (type = 'note') => {
    postsStore.save({ ...noteData, id: uId(), type });
  };

  const onEdit = () => {
    postsStore.update(noteData);
  };

  const onSave = (type = 'note') => {
    noteData.id ? onEdit() : onCreate(type);
    postsStore.close();
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
    postsStore,
    noteData,
    onCreate,
    onEdit,
    onRemove,
    onSave,
    onReset,
  };
};
