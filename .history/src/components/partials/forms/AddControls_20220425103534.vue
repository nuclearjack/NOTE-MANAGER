<template>
  <div class="flex justify-end q-mt-auto q-ml-auto q-pb-lg">
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
      type="reset"
      class="q-mr-md"
      color="warning"
      icon="mdi-autorenew"
      size="large"
      round
    />

    <q-btn type="submit" color="green-6" icon="mdi-check" size="large" round />
  </div>
</template>
