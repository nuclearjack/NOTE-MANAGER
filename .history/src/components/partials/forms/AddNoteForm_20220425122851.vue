<template>
  <q-form
    class="d-flex column q-gutter-md"
    style="min-height: calc(100vh - (50px + 1rem))"
    @submit="onSave('note')"
    @reset="onReset"
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
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePostForm } from 'src/setups/usePostForm';
import AddControls from './AddControls.vue';

export default defineComponent({
  name: 'AddNoteForm',
  components: {
    AddControls,
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
