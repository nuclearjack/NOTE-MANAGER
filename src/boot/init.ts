import { boot } from 'quasar/wrappers';
import { Dark } from 'quasar';
import { useGlobalStore } from 'src/stores/global';
import { usePostsStore } from 'src/stores/posts';

export default boot(({ store }) => {
  const globalStore = useGlobalStore(store);
  const postsStore = usePostsStore(store);

  const init = () => {
    globalStore.init();

    globalStore.$subscribe(globalStore.snapShot);
    postsStore.$subscribe(globalStore.snapShot);

    Dark.set(globalStore.settings?.dark);

    postsStore.setLoading(false);
  };

  init();
});
