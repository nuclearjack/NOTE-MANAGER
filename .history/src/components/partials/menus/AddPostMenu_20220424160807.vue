<template>
  <div class="add-post-menu">
    <q-btn
      class="add-post-types"
      icon="mdi-playlist-plus"
      color="indigo-6"
      size="lg"
      round
      v-click-outside="onAddPostsHide"
      @click="showAddPosts = !showAddPosts"
    />
    <transition
      v-show="showAddPosts"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
      appear
    >
      <div class="add-post-btns flex column flex-center">
        <q-btn
          v-for="item in menu"
          :key="item.type"
          :color="item.color"
          :icon="item.icon"
          class="q-mb-md"
          aria-label="Add"
          width="40px"
          height="40px"
          round
          @click="onDialogShow(item.type)"
        />
      </div>
    </transition>
  </div>
  <DialogAddPost :title="currentTitle || newPosts[currentType]">
    <template #form>
      <component :is="forms[currentType]"></component>
    </template>
  </DialogAddPost>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { AddPostMenu } from 'src/constants/menus/addPostMenu';
import { NEW_POSTS } from 'src/constants';
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
  name: 'AddPostMenu',
  components: {
    DialogAddPost,
    AddLoginForm,
    AddNoteForm,
  },
  setup() {
    const postsStore = usePostsStore();
    const menu = ref(AddPostMenu);
    const showAddPosts = ref(false);
    const currentType = computed(() => postsStore.formType);
    const currentTitle = computed(() => postsStore.postCurrent?.title);

    const onDialogShow = (type: string) => {
      postsStore.setFormType(type);
      postsStore.openDialog();
    };

    const onAddPostsHide = () => {
      showAddPosts.value = false;
    };

    return {
      forms,
      menu,
      showAddPosts,
      currentType,
      currentTitle,
      newPosts: NEW_POSTS,
      onDialogShow,
      onAddPostsHide,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-post-menu {
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
