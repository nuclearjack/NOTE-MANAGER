<template>
  <q-form
    class="d-flex column q-gutter-md q-px-sm"
    style="min-height: calc(100vh - 50px)"
    @submit="onSave('login')"
    @reset="onReset"
  >
    <div class="flex items-center justify-start">
      <q-icon name="mdi-card" class="q-mr-md" color="white" size="xl" />
      <q-input
        v-model="noteData.title"
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
      v-model="noteData.name"
      :rules="[(val) => (val && val.length > 0) || 'Введите имя держателя']"
      label="Имя держателя*"
      class="q-mb-none"
      color="light-blue-6"
      lazy-rules
      clearable
      dark
    />

    <q-input
      v-model="noteData.cardNumber"
      :rules="[(val) => (val && val.length > 0) || 'Введите номер карты']"
      label="Номер карты*"
      class="q-mb-none"
      color="light-blue-6"
      lazy-rules
      clearable
      dark
    />

    <q-select v-model="model" :options="options" label="Standard" />

    <q-input
      v-model="noteData.cardNumber"
      :rules="[(val) => (val && val.length > 0) || 'Введите номер карты']"
      label="Номер карты*"
      class="q-mb-none"
      color="light-blue-6"
      lazy-rules
      clearable
      dark
    />

    <!-- <q-input
      v-model="noteData.password"
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
    </q-input> -->

    <!-- <q-input
      v-model="noteData.resource"
      :rules="[(val) => (val && val.length > 0) || 'Введите адрес сайта']"
      label="Ресурс / адрес *"
      class="q-mb-none"
      color="light-blue-6"
      lazy-rules
      clearable
      dark
    /> -->
    <!--
    <q-input
      v-model="noteData.comment"
      label="Комментарий"
      color="light-blue-6"
      class="q-mb-sm"
      type="textarea"
      hide-bottom-space
      lazy-rules
      clearable
      dark
    /> -->

    <div class="flex justify-end q-mt-auto q-mb-xl q-ml-auto q-pb-lg">
      <q-btn
        v-if="noteData.id"
        class="q-mr-md"
        color="red-6"
        icon="mdi-delete"
        size="large"
        round
        @click="showConfirm = true"
      />

      <q-btn
        v-if="!noteData.id"
        type="reset"
        class="q-mr-md"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
      />

      <q-btn
        type="submit"
        color="green-6"
        icon="mdi-check"
        size="large"
        round
      />
    </div>

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
            color="red-6"
            size="lg"
            icon="mdi-delete"
            round
            @click="onRemove"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePostForm } from 'src/setups/useAddLoginForm';

export const CARD_TYPES = [
  'МИР',
  'Visa',
  'MasterCard',
  'MasterCard Maestro',
  'American Express',
  'Discover',
  "Diner's Club",
  'Union Pay',
  'JCB',
];

export default defineComponent({
  name: 'AddLoginForm',
  setup() {
    const { noteData, onSave, onReset, onRemove } = usePostForm();
    const showPassword = ref(false);
    const showConfirm = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      noteData,
      showPassword,
      showConfirm,
      onSave,
      togglePassword,
      onReset,
      onRemove,
    };
  },
});
</script>
