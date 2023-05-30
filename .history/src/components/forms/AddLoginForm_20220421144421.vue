<template>
  <q-form
    class="q-gutter-md q-mb-lg q-pa-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <q-input
      v-model="loginData.title"
      :rules="[(val) => (val && val.length > 0) || 'Введите название']"
      class="q-mb-sm"
      label="Название *"
      label-color="white"
      color="light-blue-6"
      hide-bottom-space
      lazy-rules
      clearable
      dark
    />

    <q-input
      v-model="loginData.login"
      :rules="[(val) => (val && val.length > 0) || 'Введите логин']"
      label="Логин *"
      label-color="white"
      color="light-blue-6"
      class="q-mb-sm"
      hide-bottom-space
      lazy-rules
      clearable
      dark
    />

    <q-input
      v-model="loginData.password"
      :rules="[(val) => (val && val.length > 0) || 'Введите пароль']"
      type="password"
      label="Пароль *"
      label-color="white"
      color="light-blue-6"
      class="q-mb-sm"
      hide-bottom-space
      lazy-rules
      clearable
      dark
    >
      <template v-slot:append>
        <q-icon
          :name="showPassword ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="togglePassword"
        />
      </template>
    </q-input>

    <q-input
      v-model="loginData.resource"
      :rules="[(val) => (val && val.length > 0) || 'Введите адрес сайта']"
      label="Ресурс / адрес *"
      label-color="white"
      color="light-blue-6"
      class="q-mb-md"
      hide-bottom-space
      lazy-rules
      clearable
      dark
    />

    <q-input
      v-model="loginData.comment"
      label="Комментарий"
      label-color="white"
      color="light-blue-6"
      class="q-mb-sm"
      hide-bottom-space
      type="textarea"
      lazy-rules
      clearable
      dark
    />

    <div class="flex justify-end q-mt-xl q-ml-auto">
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

export default defineComponent({
  name: 'AddLoginForm',
  emits: ['dialog-hide'],
  setup(props, { emit }) {
    const postsStore = usePostsStore();
    const loginData = reactive({}) as PostStateInterface;
    const showPassword = ref(false);

    const togglePassword = () => (showPassword.value = !showPassword.value);

    const onSubmit = () => {
      postsStore.save(loginData);
      emit('dialog-hide');
    };

    const onReset = () => null;

    return {
      loginData,
      onSubmit,
      onReset,
    };
  },
});
</script>
