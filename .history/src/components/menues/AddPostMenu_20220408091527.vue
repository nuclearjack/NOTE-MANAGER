<template>
  <div class="add-post-menu">
    <q-btn
      class="add-post-types text-black"
      aria-label="Add"
      color="green-13"
      icon="add"
      size="lg"
      round
      @click="showAddPosts = !showAddPosts"
    />
    <transition
      v-show="showAddPosts"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
      appear
    >
      <div
        class="add-post-btns flex column flex-center"
      >
        <q-btn
          v-for="item in menu"
          :key="item.type"
          :color="item.color"
          :icon="item.icon"
          class="text-black q-mb-md"
          width="40px"
          height="40px"
          aria-label="Add"
          round
          @click="dialogShow = true"
        />
      </div>
    </transition>
  </div>

  <q-dialog
    v-model="dialogShow"
    position="bottom"
    class="t-post-form"
  >
    <q-card
      style="height: calc(100vh - 50px); max-height: unset;"
      class="q-mt-auto"
    >
      <q-card-section>
        <AddLoginForm />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { iAppPostMenuItem } from 'components/models';

import AddLoginForm from 'components/forms/AddLoginForm.vue';

export default defineComponent({
  name: 'AddPostMenu',
  components: {
    AddLoginForm,
  },
  props: {
    menu: {
      type: Array as PropType<Array<iAppPostMenuItem>>,
      required: true,
    },
  },
  setup() {
    const showAddPosts = ref(false);
    const dialogShow = ref(false);

    return {
      showAddPosts,
      dialogShow,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-post-menu {
  position: fixed;
  right: 30px;
  bottom: 90px;
  width: 60px;
  min-height: 60px;
  & .add-post-types {
    position: absolute;
    bottom: 0;
    z-index: 99;
  }
  & .add-post-btns {
    margin-bottom: 60px;
    animation-duration: 0.5s;
  }
}

</style>

<style lang="scss">
.t-post-form {
  & .q-dialog__inner {
    height: 100%;
  }
}
</style>
