<template>
  <q-form
    class="q-gutter-md q-mb-lg q-pa-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <h3 class="text-h5">Новая запись</h3>
    <q-input
      v-model="loginData.title"
      :rules="[(val) => (val && val.length > 0) || 'Введите название']"
      label="Название *"
      class="q-mb-sm"
      hide-bottom-space
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.login"
      :rules="[(val) => (val && val.length > 0) || 'Введите логин']"
      label="Логин *"
      class="q-mb-sm"
      hide-bottom-space
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.password"
      :rules="[(val) => (val && val.length > 0) || 'Введите пароль']"
      label="Пароль *"
      class="q-mb-sm"
      hide-bottom-space
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.resource"
      :rules="[(val) => (val && val.length > 0) || 'Введите адрес сайта']"
      label="Ресурс / адрес *"
      class="q-mb-md"
      hide-bottom-space
      lazy-rules
      filled
    />

    <q-input
      v-model="loginData.comment"
      label="Комментарий"
      class="q-mb-sm"
      hide-bottom-space
      type="textarea"
      lazy-rules
      filled
    />

    <div class="q-mt-lg">
      <q-btn
        type="submit"
        color="secondary"
        icon="mdi-check"
        size="large"
        round
      />

      <q-btn
        type="reset"
        class="q-ml-sm"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
      />
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
