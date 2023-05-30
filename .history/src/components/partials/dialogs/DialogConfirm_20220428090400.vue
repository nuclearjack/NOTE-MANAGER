<template>
  <q-dialog v-model="showConfirm">
    <q-card dark square>
      <q-card-actions class="bg-default no-border q-pa-md" align="center">
        <q-btn
          class="q-mr-sm"
          icon="mdi-close"
          color="warning"
          size="lg"
          v-close-popup
          round
          @click="$emit('post-close')"
        />
        <q-btn
          :icon="trash ? 'mdi-delete-forever' : 'mdi-delete'"
          color="red-6"
          size="lg"
          round
          @click="trash ? $emit('post-remove') : $emit('post-trash')"
          >{{ trash }}</q-btn
        >
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
