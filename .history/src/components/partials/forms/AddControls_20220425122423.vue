<template>
  <div class="flex justify-end q-mt-auto q-ml-auto q-pb-lg">
    <div class="flex justify-end q-mt-auto q-ml-auto q-pb-lg">
      <q-btn
        v-if="postData.id"
        class="q-mr-md"
        color="red-6"
        icon="mdi-delete"
        size="large"
        round
        @click="$emit('post-delete')"
      />

      <q-btn
        v-if="!postData.id"
        type="reset"
        class="q-mr-md"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
        @click="$emit('post-reset')"
      />

      <q-btn
        v-if="postData.trash"
        color="green-6"
        icon="mdi-restore"
        size="large"
        round
        @click="$emit('post-restore')"
      />

      <q-btn
        v-else
        type="submit"
        color="green-6"
        icon="mdi-check"
        size="large"
        round
        @click="$emit('post-save')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePostForm } from 'src/setups/usePostForm';

export default defineComponent({
  name: 'AddControls',
  emits: [
    'post-save',
    'post-reset',
    'post-trash',
    'post-delete',
    'post-restore',
  ],
  setup() {
    const { postData } = usePostForm();

    return {
      postData,
    };
  },
});
</script>
