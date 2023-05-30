<template>
  <div @click="onPostClick">
    <q-item class="post-card q-mb-sm">
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white" icon="mdi-key" rounded />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ post.title }}</q-item-label>
        <q-item-label>{{ post.resource }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="star" color="yellow" @click="onLike" />
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PostStateInterface } from 'src/components/models';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'PostCard',
  props: {
    post: {
      type: Object as PropType<PostStateInterface>,
      required: true,
    },
  },
  setup(props) {
    const store = usePostsStore();
    const onPostClick = () => {
      store.setCurrent(props.post);
      store.open();
    };

    const onLike = () => {
      store.update({
        ...props.post,
        like: true,
      });
    };

    return { onPostClick, onLike };
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
