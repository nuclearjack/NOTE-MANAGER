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
          @click="$emit('post-close')"
        />
        <q-btn
          color="red-6"
          size="lg"
          :icon="trash ? 'mdi-delete-forever' : 'mdi-delete'"
          round
          @click="trash ? $emit('post-remove') : $emit('post-trash')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'DialogConfrim',
  emits: ['post-close', 'post-trash', 'post-remove'],
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
    const showConfirm = computed(() => props.show);

    return { showConfirm };
  },
});
</script>
