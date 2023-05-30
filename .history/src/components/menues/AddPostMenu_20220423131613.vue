<template>
  <div class="add-post-menu">
    <q-btn
      class="add-post-types text-black"
      aria-label="Add"
      color="green-14"
      tabindex="0"
      icon="add"
      size="lg"
      round
      @click="toggleAddPosts"
      @focusout="toggleAddPosts"
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
          class="text-black q-mb-md"
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

      <q-toolbar-title>{{ title }}</q-toolbar-title>
    </q-toolbar>
    <q-card
      style="height: 100vh; max-height: unset"
      class="bg-default q-mt-auto q-pb-lg"
      dark
    >
      <q-card-section>
        <component :is="components[currentType]"></component>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { AddPostMenu } from '../../menues/addPostMenu';
import { usePostsStore } from 'src/stores/posts';
import AddLoginForm from 'components/forms/AddLoginForm.vue';
import AddNoteForm from 'components/forms/AddNoteForm.vue';

export default defineComponent({
  name: 'AddPostMenu',
  components: {
    AddLoginForm,
    AddNoteForm,
  },
  setup() {
    const store = usePostsStore();
    const menu = ref(AddPostMenu);
    const showAddPosts = ref(false);
    const title = computed(() => store.postCurrent?.title ?? 'Новая запись');
    const showDialog = computed(() => store.dialog);
    const currentType = ref('login');

    const toggleAddPosts = () => (showAddPosts.value = !showAddPosts.value);
    const dialogShow = (type: string) => {
      currentType.value = type;
      store.open();
    };
    const dialogHide = () => {
      store.setCurrent(null);
      store.close();
    };

    const components = {
      login: AddLoginForm,
      note: AddNoteForm,
    };

    return {
      menu,
      title,
      showAddPosts,
      showDialog,
      currentType,
      components,
      toggleAddPosts,
      dialogShow,
      dialogHide,
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
