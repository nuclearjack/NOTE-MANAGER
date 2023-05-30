<template>
  <q-form class="post-form">
    <div class="row q-col-gutter-sm q-mb-md">
      <div class="col-12">
        <div class="post-title">
          <q-icon name="mdi-web" class="q-mr-md q-pb-sm" size="xl" />
          <q-input
            v-model="post.title"
            placeholder="Заголовок"
            class="flex-grow-1 q-mb-md"
            color="light-blue-6"
            maxlength="50"
            lazy-rules
          />
        </div>
      </div>
      <div class="col-12">
        <q-input
          v-model="post.resource"
          label="Ресурс / адрес"
          class="q-mb-md"
          color="light-blue-6"
          lazy-rules
        />
      </div>
      <div class="col-12">
        <q-input
          v-model="post.login"
          class="q-mb-md"
          label="Логин"
          color="light-blue-6"
          lazy-rules
        />
      </div>
      <div class="col-12">
        <q-input
          v-model="post.password"
          :type="showPassword ? 'text' : 'password'"
          class="q-mb-md"
          label="Пароль"
          color="light-blue-6"
          lazy-rules
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer q-pl-sm"
              @click="showPassword = !showPassword"
            />

            <q-icon
              name="mdi-cog"
              class="cursor-pointer q-pl-sm"
              @click="showPasswordGen = !showPasswordGen"
            />
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <q-input
          v-model="post.comment"
          placeholder="Заметка"
          color="light-blue-6"
          class="q-mb-md"
          type="textarea"
          rows="10"
          lazy-rules
          clearable
        />
      </div>
    </div>
  </q-form>

  <PasswordDialog
    v-model:show="showPasswordGen"
    v-model:password="post.password"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePosts } from 'src/setups/usePosts';
import { Account } from 'components/models';
import PasswordDialog from 'components/password/PasswordDialog.vue';

const { postsStore } = usePosts();

const post = computed(() => postsStore.postCurrent as Account);
const showPassword = ref(false);
const showPasswordGen = ref(false);
</script>
