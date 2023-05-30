<template>
  <q-form
    class="d-flex column"
    style="min-height: calc(100vh - (50px + 2rem))"
    @submit.prevent="onSave('note')"
    @reset="onReset"
  >
    <div class="row q-col-gutter-sm q-mb-md">
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
          type="textarea"
          lazy-rules
          clearable
          dark
        />
      </div>
    </div>

    <div class="flex justify-end q-mt-auto q-ml-auto q-py-xl q-mb-lg">
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
        class="q-mr-md"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
        @click="onReset"
      />

      <q-btn
        v-if="postData.trash"
        color="green-6"
        icon="mdi-restore"
        size="large"
        round
        @click="onRestore"
      />

      <q-btn
        v-else
        type="submit"
        color="green-6"
        icon="mdi-check"
        size="large"
        round
      />
    </div>

    <DialogConfirm
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
import DialogConfirm from 'src/components/partials/dialogs/DialogConfirm.vue';

export default defineComponent({
  name: 'AddNoteForm',
  components: {
    DialogConfirm,
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
