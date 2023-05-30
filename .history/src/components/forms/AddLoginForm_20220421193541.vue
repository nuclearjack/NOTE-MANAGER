<template>
  <q-form
    class="q-gutter-md q-px-sm"
    @submit="onSubmit"
    @reset="onReset"
    @remove="onRemove"
  >
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
        type="remove"
        class="q-mr-md text-black"
        color="red-6"
        icon="mdi-close"
        size="large"
        round
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
  setup(props, { emit }) {
    const postsStore = usePostsStore();
    const showPassword = ref(false);

    const loginData = reactive(
      postsStore.postCurrent ?? {}
    ) as PostStateInterface;

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const onSubmit = () => {
      postsStore.save({ ...loginData, id: uId() });
      emit('dialog-hide');
    };

    const onRemove = () => {
      postsStore.removeCurrents();
      emit('dialog-hide');
    };

    const onReset = () => {
      for (const key in loginData) {
        delete loginData[key as keyof PostStateInterface];
      }
    };

    return {
      loginData,
      showPassword,
      togglePassword,
      onSubmit,
      onReset,
      onRemove,
    };
  },
});
</script>
