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
          <slot name="form" />
        </q-card-section>
      </q-card>
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'DialogPostAdd',
  props: {
    title: {
      type: String,
      default: 'Новая запись',
    },
  },
  setup() {
    const postsStore = usePostsStore();
    // const showDialog = computed(() => postsStore.dialog);
    const showDialog = ref(true);
    const currentType = computed(() => postsStore.formType);

    const onDialogHide = () => {
      postsStore.setCurrent(null);
      postsStore.closeDialog();
    };

    return {
      showDialog,
      currentType,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      onDialogHide,
    };
  },
});
</script>
