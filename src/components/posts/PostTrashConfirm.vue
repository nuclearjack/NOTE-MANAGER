<template>
  <q-dialog v-model="showConfirm">
    <q-card square>
      <q-card-actions class="no-border q-pa-md" align="center">
        <q-btn
          class="q-mr-sm"
          icon="mdi-close"
          color="warning"
          size="lg"
          v-close-popup
          round
          @click="showConfirm = false"
        />

        <q-btn
          icon="mdi-delete"
          color="red-6"
          size="lg"
          round
          @click="
            onDelete();
            showConfirm = false;
          "
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePosts } from 'src/setups/usePosts';

const { onDelete } = usePosts();

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:show']);

const showConfirm = computed({
  get: () => props.show,
  set: (value) => emit('update:show', value),
});
</script>
