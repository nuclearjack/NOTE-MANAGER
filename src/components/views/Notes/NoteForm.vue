<template>
  <q-form class="post-form">
    <div class="row q-col-gutter-sm q-mb-md">
      <div class="col-12">
        <div class="post-title">
          <q-icon name="mdi-text" class="q-mr-md" size="xl" />

          <q-input
            v-model="post.title"
            class="flex-grow-1 q-mb-md"
            placeholder="Название"
            color="light-blue-6"
            maxlength="50"
            lazy-rules
          />
        </div>
      </div>

      <div class="col-12">
        <q-input
          v-model="post.note"
          style="min-height: 55vh"
          placeholder="Заметка"
          color="light-blue-6"
          type="textarea"
          borderless
          lazy-rules
          clearable
          autogrow
        />
      </div>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePosts } from 'src/setups/usePosts';
import { Note } from 'src/components/models';

const { postsStore } = usePosts();

const post = computed(() => postsStore.postCurrent as Note);
</script>
