<template>
  <q-item class="post-card q-mb-sm" @click.native="onPostClick">
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white" icon="mdi-key" rounded />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ post.title }}</q-item-label>
      <q-item-label>{{ post.resource }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon name="star" color="yellow" />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PostStateInterface } from 'src/components/models';

export default defineComponent({
  name: 'PostCard',
  emits: ['post-click'],
  props: {
    post: {
      type: Object as PropType<PostStateInterface>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const onPostClick = () => {
      emit('post-click');
    };

    return { onPostClick };
  },
});
</script>

<style lang="scss" scoped>
.post-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
}
</style>
