<template>
  <div class="cursor-pointer" @click="onPostClick">
    <q-item class="post-card q-mb-sm">
      <q-item-section avatar>
        <q-avatar
          :color="postColors[post.type] || postIcons.default"
          :icon="postIcons[post.type] || postIcons.default"
          text-color="white"
          rounded
        />
      </q-item-section>

      <q-item-section>
        <q-item-label class="ellipsis">{{ post.title }}</q-item-label>
        <!-- <q-item-label>{{ post.resource }}</q-item-label> -->
      </q-item-section>

      <q-item-section v-if="!post.trash" side>
        <q-btn round @click.stop="onLike">
          <q-icon
            name="star"
            class="post-like"
            :color="post.like ? 'yellow' : 'disabled'"
            :class="post.like && 'liked'"
          />
        </q-btn>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { POST_ICONS, POST_COLORS } from 'src/constants';
import { defineComponent, PropType } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import { Post } from 'src/components/models';

export default defineComponent({
  name: 'PostCard',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup(props) {
    const postsStore = usePostsStore();

    const onPostClick = () => {
      postsStore.setCurrent(props.post);
      postsStore.setFormType(props.post.type);
      postsStore.openDialog();
    };

    const onLike = () => {
      postsStore.update({
        ...props.post,
        like: !(props.post.like ?? false),
      });
      postsStore.snapShot();
    };

    return {
      postIcons: POST_ICONS,
      postColors: POST_COLORS,
      onPostClick,
      onLike,
    };
  },
});
</script>

<style lang="scss" scoped>
.post-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  & .post-like {
    transition: all 0.15s ease-in;
    &.liked {
      transform: scale(1.1);
    }
  }
}
</style>
