<template>
  <div @click="onPostClick">
    <q-item class="post-card q-mb-sm">
      <q-item-section avatar>
        <q-avatar
          color="primary"
          text-color="white"
          :icon="PostIcons[post.type]"
          rounded
        />
      </q-item-section>

      {{ PostIcons }}

      <q-item-section>
        <q-item-label>{{ post.title }}</q-item-label>
        <q-item-label>{{ post.resource }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon
          name="star"
          :color="post.like ? 'yellow' : 'disabled'"
          @click.stop="onLike"
        />
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
    const postsStore = usePostsStore();

    const onPostClick = () => {
      postsStore.setCurrent(props.post);
      postsStore.open();
    };

    const onLike = () => {
      postsStore.update({
        ...props.post,
        like: !(props.post.like ?? false),
      });
      postsStore.snapShot();
    };

    enum PostIcons {
      'login' = 'mdi-key',
      'note' = 'mdi-note',
    }

    return { onPostClick, onLike, PostIcons };
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
