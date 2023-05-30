<template>
  <q-dialog
    v-model="showDialog"
    position="bottom"
    class="t-post-form"
    maximized
    seamless
    square
  >
    <div>
      <q-toolbar class="bg-dark text-white q-pl-md" dark>
        <q-toolbar-title>{{ title }}</q-toolbar-title>
        <q-space />
        <q-btn
          aria-label="Menu"
          icon="close"
          round
          dense
          flat
          @click="onDialogHide"
        />
      </q-toolbar>
      <q-card
        style="max-height: unset"
        class="bg-default q-mt-auto q-pb-none full-width"
        dark
      >
        <q-card-section>
          <FormAddLoginPost />
        </q-card-section>
      </q-card>
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { usePostsStore } from 'src/stores/posts';
import FormAddLoginPost from 'src/components/partials/forms/FormAddLoginPost.vue';

export default defineComponent({
  name: 'AccountsView',
  components: {
    FormAddLoginPost,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);
    const showDialog = computed(() => postsStore.dialogAccountAdd);
    const title = ref('Новый аккаунт');

    const onDialogHide = () => {
      postsStore.setCurrent(null);
      postsStore.setDialogAccountAdd(false);
    };

    return {
      showDialog,
      posts,
      title,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      onDialogHide,
    };
  },
});
</script>
