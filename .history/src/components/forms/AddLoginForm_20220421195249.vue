<template>
  <q-form class="q-gutter-md q-px-sm" @submit="onSubmit" @reset="onReset">
    <div class="flex items-center justify-start">
      <q-icon
        name="mdi-login-variant"
        class="q-mr-md"
        color="white"
        size="xl"
      />
      <q-input
        v-model="loginData.title"
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
      v-model="loginData.login"
      :rules="[(val) => (val && val.length > 0) || 'Введите логин']"
      label="Логин *"
      class="q-mb-none"
      color="light-blue-6"
      lazy-rules
      clearable
      dark
    />

    <q-input
      v-model="loginData.password"
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
          @click="togglePassword"
        />
      </template>
    </q-input>

    <q-input
      v-model="loginData.resource"
      :rules="[(val) => (val && val.length > 0) || 'Введите адрес сайта']"
      label="Ресурс / адрес *"
      class="q-mb-none"
      color="light-blue-6"
      lazy-rules
      clearable
      dark
    />

    <q-input
      v-model="loginData.comment"
      label="Комментарий"
      color="light-blue-6"
      class="q-mb-sm"
      hide-bottom-space
      type="textarea"
      lazy-rules
      clearable
      dark
    />

    <div class="flex justify-end q-my-xl q-ml-auto">
      <q-btn
        v-if="loginData.id"
        class="q-mr-md text-black"
        color="red-6"
        icon="mdi-close"
        size="large"
        round
        @click="onConfirm"
      />

      <q-btn
        type="reset"
        class="q-mr-md text-black"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
      />

      <q-btn
        type="submit"
        class="text-black"
        color="green-13"
        icon="mdi-check"
        size="large"
        round
      />
    </div>

    <q-dialog v-model="showConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >You are currently not connected to any network.</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PostStateInterface } from '../models';
import { uId } from 'src/utils';

export default defineComponent({
  name: 'AddLoginForm',
  emits: ['dialog-hide'],
  setup() {
    const postsStore = usePostsStore();
    const showPassword = ref(false);
    const showConfirm = ref(false);

    const loginData = reactive(
      postsStore.postCurrent ?? {}
    ) as PostStateInterface;

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const onSubmit = () => {
      postsStore.save({ ...loginData, id: uId() });
      postsStore.close();
    };

    const onRemove = () => {
      postsStore.removeCurrent();
      postsStore.close();
    };

    const onConfirm = () => {
      showConfirm.value = true;
    };

    const onReset = () => {
      for (const key in loginData) {
        delete loginData[key as keyof PostStateInterface];
      }
    };

    return {
      loginData,
      showPassword,
      showConfirm,
      togglePassword,
      onSubmit,
      onReset,
      onConfirm,
    };
  },
});
</script>
