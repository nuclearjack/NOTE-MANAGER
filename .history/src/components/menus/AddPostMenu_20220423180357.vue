<template>
  <div class="add-post-menu">
    <q-btn
      class="add-post-types"
      icon="mdi-playlist-plus"
      color="green-6"
      size="lg"
      round
      v-click-outside="hideAddPosts"
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
          @click="dialogShow(item.type)"
        />
      </div>
    </transition>
  </div>

  <q-dialog
    v-model="showDialog"
    position="bottom"
    class="t-post-form"
    square
    seamless
  >
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
      style="height: 100vh; max-height: unset"
      class="bg-default q-mt-auto q-pb-lg"
      dark
    >
      <q-card-section>
        <component :is="currentComponent"></component>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { AddPostMenu } from '../../menus/addPostMenu';
import { usePostsStore } from 'src/stores/posts';
import AddLoginForm from 'components/forms/AddLoginForm.vue';
import AddNoteForm from 'components/forms/AddNoteForm.vue';

type Forms = {
  login: typeof AddLoginForm;
  note: typeof AddNoteForm;
};

const forms: Forms = {
  login: AddLoginForm,
  note: AddNoteForm,
};

export default defineComponent({
  name: 'AddPostMenu',
  components: {
    AddLoginForm,
    AddNoteForm,
  },
  setup() {
    const postsStore = usePostsStore();
    const menu = ref(AddPostMenu);
    const showAddPosts = ref(false);
    const title = computed(() => postsStore.postCurrent?.title);
    const showDialog = computed(() => postsStore.dialog);
    const currentType = computed(() => postsStore.formType);
    const currentComponent = ref(forms[currentType.value as keyof Forms]);

    const dialogShow = (type: string) => {
      postsStore.setFormType(type);
      postsStore.open();
    };

    const dialogHide = () => {
      postsStore.setCurrent(null);
      postsStore.close();
    };

    const hideAddPosts = () => {
      showAddPosts.value = false;
    };

    return {
      menu,
      title,
      showAddPosts,
      showDialog,
      currentType,
      currentComponent,
      dialogShow,
      dialogHide,
      hideAddPosts,
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
