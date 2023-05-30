<template>
  <div>
    <q-btn
      :icon="postIcons[postType]"
      :color="postColors[postType]"
      class="add-post"
      size="lg"
      round
      @click="onDialogShow(postType)"
    />
    <DialogPostAdd :title="currentTitle || newPosts[postType]">
      <template #form>
        <component :is="forms[postType]"></component>
      </template>
    </DialogPostAdd>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { POST_COLORS, POST_ICONS, NEW_POSTS } from 'src/constants';
import { AddPostMenu } from 'src/constants/menus/addPostMenu';
import { usePostsStore } from 'src/stores/posts';

import DialogPostAdd from 'src/components/partials/dialogs/DialogPostAdd.vue';
import FormAddLoginPost from 'src/components/partials/forms/FormAddLoginPost.vue';
import FormAddNotePost from 'src/components/partials/forms/FormAddNotePost.vue';
import FormAddCardPost from 'src/components/partials/forms/FormAddCardPost.vue';

export const forms = {
  login: FormAddLoginPost,
  note: FormAddNotePost,
  card: FormAddCardPost,
};

export default defineComponent({
  name: 'ButtonPostAdd',
  components: {
    DialogPostAdd,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    postType: {
      type: String,
      default: 'note',
    },
  },
  setup() {
    const postsStore = usePostsStore();
    const menu = ref(AddPostMenu);
    const currentTitle = computed(() => postsStore.postCurrent?.title);

    const onDialogShow = (type: string) => {
      postsStore.setFormType(type);
      postsStore.openDialog();
    };

    return {
      forms,
      menu,
      currentTitle,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      newPosts: NEW_POSTS,
      onDialogShow,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-post {
  position: fixed;
  right: 30px;
  bottom: 90px;
  width: 60px;
  min-height: 60px;
}
</style>

<style lang="scss">
.t-post-form {
  & .q-dialog__inner {
    height: 100%;
  }
}
</style>
