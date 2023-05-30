<template>
  <q-dialog v-model="showPasswordGen" top="0" full-width>
    <q-card class="password-card q-py-sm" square>
      <q-card-section class="row items-center">
        <b>Генератор пароля: </b>

        <q-space />

        <q-btn
          icon="close"
          round
          dense
          flat
          @click="showPasswordGen = !showPasswordGen"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form class="password-form">
          <q-slider
            v-model="length"
            :color="$q.dark.isActive ? 'indigo-5' : 'primary'"
            :min="MIN_PASS_LENGTH"
            :max="MAX_PASS_LENGTH"
            thumb-size="24px"
            class="q-px-xs"
          />

          <span>{{ GEN_PASSWORD_TITLE }} {{ length }}</span>

          <q-option-group
            v-model="settings"
            :color="$q.dark.isActive ? 'indigo-5' : 'primary'"
            :options="GEN_PASSWORD_OPTIONS"
            class="settings q-mt-md"
            type="toggle"
            size="lg"
          />
        </q-form>
      </q-card-section>

      <q-card-section align="center">
        <div
          :class="$q.dark.isActive ? 'text-white' : 'text-grey-9'"
          class="password text-h5"
        >
          {{ password }}
        </div>
      </q-card-section>

      <q-card-section class="q-mt-auto" align="right">
        <q-btn
          :disabled="!settings.length"
          :class="$q.dark.isActive ? 'bg-indigo-5' : 'bg-primary'"
          icon="mdi-electron-framework"
          class="text-white q-mr-sm"
          dark
          @click="onGenerate"
        />

        <q-btn
          :class="$q.dark.isActive ? 'bg-indigo-5' : 'bg-primary'"
          class="text-white"
          icon="mdi-check"
          v-close-popup
          dark
          @click="emit('update:password', password)"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { generatePassword } from 'src/utils';
import { GEN_PASSWORD_TITLE } from 'src/constants/lang';
import {
  GEN_PASSWORD_OPTIONS,
  MIN_PASS_LENGTH,
  MAX_PASS_LENGTH,
} from 'src/constants';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:show', 'update:password']);

const length = ref(MIN_PASS_LENGTH);
const settings = ref(['lowercase']);
const password = ref(generatePassword(length.value, settings.value));

const showPasswordGen = computed({
  get: () => props.show,
  set: (value) => emit('update:show', value),
});

const onGenerate = () => {
  password.value = generatePassword(length.value, settings.value);
};

watch(
  () => length.value,
  () => onGenerate()
);

watch(
  () => settings.value,
  () => {
    return settings.value.length ? onGenerate() : (password.value = '');
  }
);
</script>

<style lang="scss">
.password-card {
  min-height: 635px;
  display: flex;
  flex-direction: column;
  & .password {
    min-height: 56px;
    padding: 0.4em;
    border: 2px solid $primary;
    border-radius: 6px;
    color: $grey-9;
    word-wrap: break-word;
    cursor: pointer;
  }
}

.password-form {
  & .settings {
    & > div {
      margin-left: 0;
    }
  }
}
</style>
