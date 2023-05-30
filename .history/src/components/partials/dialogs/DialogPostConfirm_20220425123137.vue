<template>
  <q-dialog v-model="showConfirm">
    <q-card dark square>
      <q-card-actions class="bg-default no-border q-pa-md" align="center">
        <q-btn
          class="q-mr-sm"
          color="warning"
          size="lg"
          icon="mdi-close"
          v-close-popup
          round
          @click="showConfirm = false"
        />
        <q-btn
          v-if="postData.trash"
          color="red-6"
          size="lg"
          icon="mdi-delete-forever"
          round
          @click="onRemove"
        />
        <q-btn
          v-else
          color="red-6"
          size="lg"
          icon="mdi-delete"
          round
          @click="onTrash"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'DialogPostConfrim',
  props: {
    title: {
      type: String,
      default: 'Новая запись',
    },
  },
  setup() {
    const postsStore = usePostsStore();
    const showDialog = computed(() => postsStore.dialog);
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
