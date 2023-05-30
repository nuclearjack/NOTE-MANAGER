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
          v-if="trash"
          color="red-6"
          size="lg"
          icon="mdi-delete"
          round
          @click="$emit('post-trash')"
        />
        <q-btn
          v-else
          color="red-6"
          size="lg"
          icon="mdi-delete-forever"
          round
          @click="$emit('post-remove')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { POST_COLORS, POST_ICONS } from 'src/constants';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'DialogPostConfrim',
  emits: ['post-trash', 'post-remove'],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const postsStore = usePostsStore();
    const currentType = computed(() => postsStore.formType);
    const showConfirm = ref(props.show);

    const onDialogHide = () => {
      postsStore.setCurrent(null);
      postsStore.closeDialog();
    };

    return {
      showConfirm,
      currentType,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      onDialogHide,
    };
  },
});
</script>
