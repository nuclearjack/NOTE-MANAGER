<template>
  <q-form
    class="d-flex column"
    style="min-height: calc(100vh - (50px + 2rem))"
    @submit.prevent="onSave('login')"
    @reset="onReset"
  >
    <div class="row q-col-gutter-sm q-mb-md">
      <div class="col-12">
        <div class="flex items-center justify-start">
          <q-icon name="mdi-key" class="q-mr-md" color="white" size="xl" />
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
          v-model="postData.login"
          :rules="[(val) => (val && val.length > 0) || 'Введите логин']"
          label="Логин *"
          class="q-mb-none"
          color="light-blue-6"
          hide-bottom-space
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col-12">
        <q-input
          v-model="postData.password"
          :rules="[(val) => (val && val.length > 0) || 'Введите пароль']"
          :type="showPassword ? 'text' : 'password'"
          label="Пароль *"
          class="q-mb-none"
          color="light-blue-6"
          hide-bottom-space
          lazy-rules
          clearable
          dark
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer q-pl-sm"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <q-input
          v-model="postData.resource"
          label="Ресурс / адрес"
          class="q-mb-none"
          color="light-blue-6"
          hide-bottom-space
          lazy-rules
          clearable
          dark
        />
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

    <div class="flex justify-end q-mt-auto q-ml-auto q-py-xl">
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
  name: 'AddLoginForm',
  components: {
    DialogConfirm,
  },
  setup() {
    const { postData, onSave, onReset, onTrash, onRemove, onRestore } =
      usePostForm();
    const showPassword = ref(false);
    const showConfirm = ref(false);

    return {
      postData,
      showPassword,
      showConfirm,
      onSave,
      onReset,
      onTrash,
      onRemove,
      onRestore,
    };
  },
});
</script>
