<template>
  <div class="add-post">
    <q-btn
      :icon="postIcons['remove']"
      :color="postColors['trash']"
      size="lg"
      round
      @click="showConfirm = !showConfirm"
    />
  </div>

  <DialogConfirm
    :show="showConfirm"
    :trash="false"
    @post-close="showConfirm = false"
    @post-remove="onRemoveTrash"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { POST_COLORS, POST_ICONS, NEW_POSTS } from 'src/constants';
import { usePostForm } from 'src/setups/usePostForm';
import DialogConfirm from 'src/components/partials/dialogs/DialogConfirm.vue';

export default defineComponent({
  name: 'ButtonTrashRemove',
  components: {
    DialogConfirm,
  },
  setup() {
    const showConfirm = ref(false);
    const { onRemoveTrash } = usePostForm();

    return {
      showConfirm,
      postColors: POST_COLORS,
      postIcons: POST_ICONS,
      newPosts: NEW_POSTS,
      onRemoveTrash: () => {
        onRemoveTrash();
        showConfirm.value = !showConfirm.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.add-post {
  position: fixed;
  right: 30px;
  bottom: 90px;
  width: 60px;
  min-height: 60px;
}
</style>

<style lang="scss">
.t-post-form {
  & .q-dialog__inner {
    height: 100%;
  }
}
</style>
