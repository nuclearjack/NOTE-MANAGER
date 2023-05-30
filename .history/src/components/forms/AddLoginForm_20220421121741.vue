<template>
  <q-form
    class="q-gutter-md q-mb-lg q-pa-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <q-input
      v-model="loginData.title"
      :rules="[(val) => (val && val.length > 0) || 'Введите название']"
      label="Название *"
      hint="Название записи"
      class="q-mb-md"
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.login"
      :rules="[(val) => (val && val.length > 0) || 'Введите логин']"
      label="Логин *"
      hint="Логин"
      class="q-mb-md"
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.password"
      :rules="[(val) => (val && val.length > 0) || 'Введите пароль']"
      label="Пароль *"
      hint="Пароль"
      class="q-mb-md"
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.resource"
      :rules="[(val) => (val && val.length > 0) || 'Введите адрес сайта']"
      label="Ресурс *"
      hint="Адрес сайта"
      class="q-mb-md"
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.comment"
      label="Комментарий"
      hint="Свободная запись"
      class="q-mb-md"
      type="textarea"
      lazy-rules
      filled
    />

    <div class="q-mt-md">
      <q-btn label="Submit" type="submit" color="primary" />

      <q-btn label="Reset" type="reset" class="q-ml-sm" color="primary" flat />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { PostStateInterface } from '../models';

export default defineComponent({
  name: 'AddLoginForm',
  emits: ['dialog-hide'],
  setup(props, { emit }) {
    const postsStore = usePostsStore();
    const loginData = reactive({}) as PostStateInterface;

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
