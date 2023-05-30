<template>
  {{ showConfirm }}
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
import { defineComponent, computed } from 'vue';

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
    const showConfirm = computed(() => props.show);

    return {
      showConfirm,
    };
  },
});
</script>
