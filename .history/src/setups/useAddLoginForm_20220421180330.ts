import { ref, reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PostStateInterface } from 'src/components/models';
import { uId } from 'src/utils';

export default function useAddLoginForm(props, emit) {
  const postsStore = usePostsStore();
  const loginData = reactive({}) as PostStateInterface;
  const showPassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const onSubmit = () => {
    postsStore.save({ ...loginData, id: uId() });
    emit('dialog-hide');
  };

  const onDelete = () => {
    postsStore.remove({ ...loginData });
    emit('dialog-hide');
  };

  const onReset = () => {
    for (const key in loginData) {
      delete loginData[key as keyof PostStateInterface];
    }
  };

  return {
    loginData,
    showPassword,
    togglePassword,
    onSubmit,
    onReset,
    onDelete,
  };
}
