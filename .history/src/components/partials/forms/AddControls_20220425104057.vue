<template>
  <div class="flex justify-end q-mt-auto q-ml-auto q-pb-lg">
    <q-btn
      v-if="postData.id"
      class="q-mr-md"
      color="red-6"
      icon="mdi-delete"
      size="large"
      round
      @click="showConfirm = true"
    />

    <q-btn
      v-if="!postData.id"
      type="reset"
      class="q-mr-md"
      color="warning"
      icon="mdi-autorenew"
      size="large"
      round
    />

    <q-btn type="submit" color="green-6" icon="mdi-check" size="large" round />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePostForm } from 'src/setups/useAddLoginForm';

export default defineComponent({
  name: 'AddControls',
  setup() {
    const { postData, onSave, onReset, onRemove, onTrash } = usePostForm();
    const showPassword = ref(false);
    const showConfirm = ref(false);

    return {
      postData,
      showPassword,
      showConfirm,
      onSave,
      onReset,
      onRemove,
      onTrash,
    };
  },
});
</script>
