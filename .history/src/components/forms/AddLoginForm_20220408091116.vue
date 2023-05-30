<template>
  <q-form
    class="q-gutter-md q-mb-lg"
    @submit="onSubmit"
    @reset="onReset"
  >
    <q-input
      filled
      v-model="loginData.title"
      label="Название *"
      hint="Название записи"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Введите название']"
      class="q-mb-md"
    />

    <q-input
      filled
      v-model="loginData.login"
      label="Логин *"
      hint="Логин"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Введите логин']"
      class="q-mb-md"
    />

    <q-input
      filled
      v-model="loginData.password"
      label="Пароль *"
      hint="Пароль"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Введите пароль']"
      class="q-mb-md"
    />

    <q-input
      filled
      v-model="loginData.resource"
      label="Ресурс *"
      hint="Адрес сайта"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Введите адрес сайта']"
      class="q-mb-md"
    />

    <q-input
      filled
      v-model="loginData.comment"
      label="Комментарий"
      hint="Свободная запись"
      lazy-rules
      class="q-mb-md"
    />

    <div>
      <q-btn
        label="Submit"
        type="submit"
        color="primary"
      />

      <q-btn
        label="Reset"
        type="reset"
        class="q-ml-sm"
        color="primary"
        flat
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface iLoginPost {
  title: string,
  login: string,
  password: string,
  resource: string,
  comment?: string,
}

export default defineComponent({
  name: 'AddLoginForm',
  setup() {
    const loginData = reactive({}) as iLoginPost;

    const onSubmit = () => loginData;
    const onReset = () => null;

    return {
      loginData,
      onSubmit,
      onReset,
    };
  },
});
</script>
