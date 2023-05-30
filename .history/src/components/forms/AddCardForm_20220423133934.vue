<template>
  <q-form
    class="d-flex column q-gutter-md q-px-sm"
    style="min-height: calc(100vh - 50px)"
    @submit="onSave"
    @reset="onReset"
  >
    <div class="flex items-center justify-start">
      <q-icon name="mdi-note-outline" class="q-mr-md" color="white" size="xl" />
      <q-input
        v-model="noteData.title"
        :rules="[(val) => (val && val.length > 0) || 'Введите название']"
        class="flex-grow-1 q-mb-none"
        label="Название *"
        color="light-blue-6"
        lazy-rules
        clearable
        dark
      />
    </div>

    <q-input
      v-model="noteData.comment"
      label="Комментарий"
      color="light-blue-6"
      class="q-mb-sm"
      type="textarea"
      hide-bottom-space
      lazy-rules
      clearable
      dark
    />

    <div class="flex justify-end q-mt-auto q-mb-xl q-ml-auto q-pb-lg">
      <q-btn
        v-if="noteData.id"
        class="q-mr-md text-black"
        color="red-6"
        icon="mdi-delete"
        size="large"
        round
        @click="showConfirm = true"
      />

      <q-btn
        v-if="!noteData.id"
        type="reset"
        class="q-mr-md"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
      />

      <q-btn
        type="submit"
        color="green-13"
        icon="mdi-check"
        size="large"
        round
      />
    </div>

    <q-dialog v-model="showConfirm">
      <q-card dark square>
        <q-card-actions class="bg-default no-border q-pa-lg" align="center">
          <q-btn
            class="text-black q-mr-lg"
            color="warning"
            size="lg"
            icon="mdi-close"
            v-close-popup
            round
            @click="showConfirm = false"
          />
          <q-btn
            class="text-black"
            color="red-6"
            size="lg"
            icon="mdi-delete"
            round
            @click="onRemove"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PostStateInterface } from '../models';
import { uId } from 'src/utils';

export default defineComponent({
  name: 'AddNoteForm',
  emits: ['dialog-hide'],
  setup() {
    const postsStore = usePostsStore();
    const showConfirm = ref(false);

    const noteData = reactive(
      postsStore.postCurrent ?? {}
    ) as PostStateInterface;

    const onCreate = () => {
      postsStore.save({ ...noteData, id: uId(), type: 'note' });
      postsStore.close();
    };

    const onEdit = () => {
      postsStore.update(noteData);
      postsStore.close();
    };

    const onSave = () => {
      noteData.id ? onEdit() : onCreate();
      postsStore.snapShot();
    };

    const onRemove = () => {
      postsStore.removeCurrent();
      postsStore.close();
      postsStore.snapShot();
    };

    const onReset = () => {
      for (const key in noteData) {
        delete noteData[key as keyof PostStateInterface];
      }
    };

    return {
      noteData,
      showConfirm,
      onSave,
      onEdit,
      onReset,
      onRemove,
    };
  },
});
</script>
