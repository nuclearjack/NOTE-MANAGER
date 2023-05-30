<template>
  <q-form
    class="d-flex column q-gutter-md"
    style="min-height: calc(100vh - (50px + 1rem))"
    @submit.prevent=""
    @reset.prevent=""
  >
    <div class="row q-col-gutter-sm q-mb-xl">
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
          :rules="[(val) => (val && val.length > 0) || 'Введите адрес сайта']"
          label="Ресурс / адрес *"
          class="q-mb-none"
          color="light-blue-6"
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

    <AddControls
      @post-save="onSave('login')"
      @post-reset="onReset"
      @post-trash="onTrash"
      @post-delete="onRemove"
    />

    <!-- <div class="flex justify-end q-mt-auto q-ml-auto q-pb-lg">
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
    </div> -->

    <q-dialog v-model="showConfirm">
      <q-card dark square>
        <q-card-actions class="bg-default no-border q-pa-lg" align="center">
          <q-btn
            class="q-mr-lg"
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
  name: 'AddLoginForm',
  components: {
    AddControls,
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
