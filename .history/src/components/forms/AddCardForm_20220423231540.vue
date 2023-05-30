<template>
  <q-form
    class="d-flex column q-gutter-md q-px-sm"
    style="min-height: calc(100vh - 50px)"
    @submit="onSave('login')"
    @reset="onReset"
  >
    <div class="row">
      <div class="col col-12">
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
      </div>
      <div class="col col-12">
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
      </div>
    </div>

    <div class="col col-12">
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
    </div>
    <div class="col col-12">
      <q-select
        v-model="noteData.cardType"
        :options="cardTypes"
        label="Тип"
        class="q-mb-none"
        lazy-rules
        clearable
        dark
      />
    </div>
    <div class="col col-6">
      <q-select
        v-model="noteData.cardMonth"
        :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        label="Месяц"
        class="q-mb-none"
        lazy-rules
        clearable
        dark
      />
    </div>
    <div class="col col-6">
      <q-select
        v-model="noteData.cardYear"
        :options="cardTypes"
        label="Год"
        class="q-mb-none"
        lazy-rules
        clearable
        dark
      />
    </div>
    <div class="col col-6">
      <q-input
        v-model="noteData.cvv"
        :type="showCvv ? 'text' : 'password'"
        label="CVV"
        class="q-mb-none"
        color="light-blue-6"
        lazy-rules
        clearable
        dark
      >
        <template v-slot:append>
          <q-icon
            :name="showCvv ? 'visibility_off' : 'visibility'"
            class="cursor-pointer q-pl-sm"
            @click="showCvv = !showCvv"
          />
        </template>
      </q-input>
    </div>
    <div class="col col-6">
      <q-input
        v-model="noteData.pin"
        :type="showPin ? 'text' : 'password'"
        label="PIN"
        class="q-mb-none"
        color="light-blue-6"
        lazy-rules
        clearable
        dark
      >
        <template v-slot:append>
          <q-icon
            :name="showPin ? 'visibility_off' : 'visibility'"
            class="cursor-pointer q-pl-sm"
            @click="showPin = !showPin"
          />
        </template>
      </q-input>
    </div>
    <div class="col col-12">
      <q-input
        v-model="noteData.postIndex"
        label="Почтовый индекс"
        class="q-mb-none"
        color="light-blue-6"
        lazy-rules
        clearable
        dark
      />
    </div>
    <div class="col col-12">
      <q-input
        v-model="noteData.comment"
        label="Заметка"
        class="q-mb-none"
        color="light-blue-6"
        lazy-rules
        clearable
        dark
      />
    </div>

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
  name: 'AddCardForm',
  setup() {
    const { noteData, onSave, onReset, onRemove } = usePostForm();
    const showCvv = ref(false);
    const showPin = ref(false);
    const showConfirm = ref(false);

    return {
      noteData,
      showCvv,
      showPin,
      showConfirm,
      cardTypes: CARD_TYPES,
      onSave,
      onReset,
      onRemove,
    };
  },
});
</script>
