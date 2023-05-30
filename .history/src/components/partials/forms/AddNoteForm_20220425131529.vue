<template>
  <q-form
    class="d-flex column q-gutter-md"
    style="min-height: calc(100vh - (50px + 1rem))"
  >
    <div class="row q-col-gutter-sm q-mb-xl">
      <div class="col-12">
        <div class="flex items-center justify-start">
          <q-icon
            name="mdi-note-outline"
            class="q-mr-md"
            color="white"
            size="xl"
          />
          <q-input
            v-model="postData.title"
            :rules="[(val) => (val && val.length > 0) || 'Введите название']"
            class="flex-grow-1 q-mb-none"
            label="Название *"
            color="light-blue-6"
            lazy-rules
            clearable
            dark
          />
        </div>
      </div>

      <div class="col-12">
        <q-input
          v-model="postData.comment"
          label="Комментарий"
          color="light-blue-6"
          class="q-mb-sm"
          type="textarea"
          hide-bottom-space
          lazy-rules
          clearable
          dark
        />
      </div>
    </div>

    <AddControls
      @post-save="onSave('note')"
      @post-reset="onReset"
      @post-restore="onRestore"
      @post-delete="showConfirm = true"
    />

    <DialogPostConfirm
      :show="showConfirm"
      :trash="!postData.trash"
      @post-close="showConfirm = false"
      @post-trash="onTrash"
      @post-remove="onRemove"
    />
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePostForm } from 'src/setups/usePostForm';
import AddControls from 'src/components/partials/forms/AddControls.vue';
import DialogPostConfirm from '../dialogs/DialogPostConfirm.vue';

export default defineComponent({
  name: 'AddNoteForm',
  components: {
    AddControls,
    DialogPostConfirm,
  },
  setup() {
    const { postData, onSave, onEdit, onReset, onRemove, onRestore, onTrash } =
      usePostForm();
    const showConfirm = ref(false);

    return {
      postData,
      showConfirm,
      onSave,
      onEdit,
      onReset,
      onRemove,
      onRestore,
      onTrash,
    };
  },
});
</script>
