<template>
  <q-form class="q-gutter-md q-mb-lg" @submit="onSubmit" @reset="onReset">
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
      lazy-rules
      filled
    />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />

      <q-btn label="Reset" type="reset" class="q-ml-sm" color="primary" flat />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { usePostsStore } from 'src/stores/posts';

interface iLoginPost {
  title: string;
  login: string;
  password: string;
  resource: string;
  comment?: string;
}

export default defineComponent({
  name: 'AddLoginForm',
  setup() {
    const loginData = reactive({}) as iLoginPost;

    const onSubmit = () => {
      usePostsStore.save(loginData);
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
