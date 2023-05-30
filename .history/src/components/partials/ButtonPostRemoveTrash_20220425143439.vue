<template>
  <div class="add-post">
    <q-btn
      :icon="postIcons[postType]"
      :color="postColors[postType]"
      size="lg"
      round
      @click="onDialogShow(postType)"
    />
  </div>

  <DialogPostConfirm
    :show="showConfirm"
    trash="false"
    @post-close="showConfirm = false"
    @post-trash="onTrash"
    @post-remove="onRemove"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { POST_COLORS, POST_ICONS, NEW_POSTS } from 'src/constants';
import { AddPostMenu } from 'src/constants/menus/addPostMenu';
import { usePostsStore } from 'src/stores/posts';

import DialogPostAdd from 'src/components/partials/dialogs/DialogPostAdd.vue';
import AddLoginForm from 'src/components/partials/forms/AddLoginForm.vue';
import AddNoteForm from 'src/components/partials/forms/AddNoteForm.vue';
import AddCardForm from 'src/components/partials/forms/AddCardForm.vue';

export const forms = {
  login: AddLoginForm,
  note: AddNoteForm,
  card: AddCardForm,
};

export default defineComponent({
  name: 'ButtonPostRemoveTrash',
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
    const showConfirm = ref(false);

    const postsStore = usePostsStore();
    const menu = ref(AddPostMenu);
    const currentTitle = computed(() => postsStore.postCurrent?.title);

    const onDialogShow = (type: string) => {
      postsStore.setFormType(type);
      postsStore.openDialog();
    };

    return {
      showConfirm,

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
