<template>
  <div class="add-post">
    <q-btn
      :icon="postIcons[postType]"
      :color="postColors[postType]"
      size="lg"
      round
      @click="dialogShow(postType)"
    />
  </div>

  <DialogAddPost :title="title || newPosts[postType]">
    <template #form>
      <component :is="forms[postType]"></component>
    </template>
  </DialogAddPost>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { NEW_POSTS } from 'src/constants';
import { AddPostMenu } from 'src/constants/menus/addPostMenu';
import { usePostsStore } from 'src/stores/posts';

import DialogAddPost from 'src/components/partials/dialogs/DialogAddPost.vue';
import AddLoginForm from 'src/components/partials/forms/AddLoginForm.vue';
import AddNoteForm from 'src/components/partials/forms/AddNoteForm.vue';
import AddCardForm from 'src/components/partials/forms/AddCardForm.vue';

export const forms = {
  login: AddLoginForm,
  note: AddNoteForm,
  card: AddCardForm,
};

export default defineComponent({
  name: 'AddPost',
  components: {
    DialogAddPost,
  },
  props: {
    postType: {
      type: String,
      default: 'note',
    },
  },
  setup() {
    const postsStore = usePostsStore();
    const menu = ref(AddPostMenu);
    const showDialog = computed(() => postsStore.dialog);
    const currentType = computed(() => postsStore.formType);

    const dialogShow = (type: string) => {
      postsStore.setFormType(type);
      postsStore.openDialog();
    };

    const dialogHide = () => {
      postsStore.setCurrent(null);
      postsStore.closeDialog();
    };

    return {
      forms,
      menu,
      showDialog,
      currentType,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      newPosts: NEW_POSTS,
      dialogShow,
      dialogHide,
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
  & .add-post-types {
    position: absolute;
    bottom: 0;
    z-index: 99;
  }
  & .add-post-btns {
    margin-bottom: 60px;
    animation-duration: 0.5s;
  }
}
</style>

<style lang="scss">
.t-post-form {
  & .q-dialog__inner {
    height: 100%;
  }
}
</style>
