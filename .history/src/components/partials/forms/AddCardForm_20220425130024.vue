<template>
  <q-form
    class="d-flex column q-gutter-md"
    style="min-height: calc(100vh - (50px + 1rem))"
    @submit="onSave('card')"
    @reset="onReset"
  >
    <div class="row q-col-gutter-sm q-mb-xl">
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
          label="Номер карты*"
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
          v-model="postData.postIndex"
          label="Почтовый индекс"
          color="light-blue-6"
          lazy-rules
          clearable
          dark
        />
      </div>
      <div class="col col-12">
        <q-input
          v-model="postData.comment"
          label="Комментарий"
          color="light-blue-6"
          type="textarea"
          hide-bottom-space
          lazy-rules
          clearable
          dark
        />
      </div>
    </div>

    <AddControls
      @post-save="onSave('card')"
      @post-reset="onReset"
      @post-restore="onRestore"
      @post-delete="showConfirm = true"
    />

    <q-dialog v-model="showConfirm">
      <q-card dark square>
        <q-card-actions class="bg-default no-border q-pa-md" align="center">
          <q-btn
            class="q-mr-sm"
            color="warning"
            size="lg"
            icon="mdi-close"
            v-close-popup
            round
            @click="showConfirm = false"
          />
          <q-btn
            v-if="postData.trash"
            color="red-6"
            size="lg"
            icon="mdi-delete-forever"
            round
            @click="onRemove"
          />
          <q-btn
            v-else
            color="red-6"
            size="lg"
            icon="mdi-delete"
            round
            @click="onTrash"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CARD_TYPES, MONTHS, YEARS } from 'src/constants';
import { usePostForm } from 'src/setups/usePostForm';
import AddControls from 'src/components/partials/forms/AddControls.vue';

export default defineComponent({
  name: 'AddCardForm',
  components: {
    AddControls,
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
