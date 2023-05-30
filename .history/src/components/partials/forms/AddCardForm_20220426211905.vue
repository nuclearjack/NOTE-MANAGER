<template>
  <q-form
    class="d-flex column"
    style="min-height: calc(100vh - (50px + 2rem))"
    @submit.prevent="onSave('card')"
    @reset="onReset"
  >
    <div class="row q-col-gutter-sm q-mb-md">
      <div class="col col-12">
        <div class="flex items-center justify-start">
          <q-icon
            name="mdi-credit-card-multiple-outline"
            class="q-mr-md"
            color="white"
            size="xl"
          />
          <q-input
            v-model="postData.title"
            :rules="[(val) => (val && val.length > 0) || 'Введите название']"
            class="flex-grow-1"
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
          v-model="postData.name"
          label="Имя держателя"
          color="light-blue-6"
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col col-12">
        <q-input
          v-model="postData.cardNumber"
          :rules="[(val) => (val && val.length > 0) || 'Введите номер карты']"
          label="Номер карты *"
          color="light-blue-6"
          hide-bottom-space
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col col-12">
        <q-select
          v-model="postData.cardType"
          :options="cardTypes"
          label="Тип"
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col col-6">
        <q-select
          v-model="postData.cardMonth"
          :options="months"
          label="Месяц"
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col col-6">
        <q-select
          v-model="postData.cardYear"
          :options="years"
          label="Год"
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col col-6">
        <q-input
          v-model="postData.cvv"
          :type="showCvv ? 'text' : 'password'"
          label="CVV"
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
          v-model="postData.pin"
          :type="showPin ? 'text' : 'password'"
          label="PIN"
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
          v-model="postData.comment"
          label="Комментарий"
          color="light-blue-6"
          type="textarea"
          lazy-rules
          clearable
          dark
        />
      </div>
    </div>

    <div class="flex justify-end q-mt-auto q-ml-auto q-py-xl q-mb-lg">
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
        class="q-mr-md"
        color="warning"
        icon="mdi-autorenew"
        size="large"
        round
        @click="onReset"
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
    </div>

    <DialogConfirm
      :show="showConfirm"
      :trash="!postData.trash"
      @post-close="showConfirm = false"
      @post-trash="onTrash"
      @post-remove="onRemove"
    />
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CARD_TYPES, MONTHS, YEARS } from 'src/constants';
import { usePostForm } from 'src/setups/usePostForm';
import DialogConfirm from 'src/components/partials/dialogs/DialogConfirm.vue';

export default defineComponent({
  name: 'AddCardForm',
  components: {
    DialogConfirm,
  },
  setup() {
    const { postData, onSave, onReset, onRemove, onTrash, onRestore } =
      usePostForm();
    const showCvv = ref(false);
    const showPin = ref(false);
    const showConfirm = ref(false);

    return {
      postData,
      showCvv,
      showPin,
      showConfirm,
      cardTypes: CARD_TYPES,
      months: MONTHS,
      years: YEARS,
      onSave,
      onReset,
      onRemove,
      onRestore,
      onTrash,
    };
  },
});
</script>
