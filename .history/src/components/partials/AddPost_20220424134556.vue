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

  <q-dialog
    v-model="showDialog"
    position="bottom"
    class="t-post-form"
    maximized
    seamless
    square
  >
    <div>
      <q-toolbar class="bg-dark text-white" dark>
        <q-btn
          aria-label="Menu"
          icon="close"
          round
          dense
          flat
          @click="dialogHide"
        />

        <q-toolbar-title>{{ title || 'Новая запись' }}</q-toolbar-title>
      </q-toolbar>
      <q-card
        style="min-height: 100vh; max-height: unset"
        class="bg-default q-mt-auto q-pb-lg full-width"
        dark
      >
        <q-card-section>
          <component :is="forms[postType]"></component>
        </q-card-section>
      </q-card>
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { AddPostMenu } from 'src/constants/menus/addPostMenu';
import { usePostsStore } from 'src/stores/posts';

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
    AddLoginForm,
    AddNoteForm,
  },
  props: {
    title: {
      type: String,
      default: 'Новая запись',
    },
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
