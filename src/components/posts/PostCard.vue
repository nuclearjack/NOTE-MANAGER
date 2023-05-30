<template>
  <div @click="$emit('post-click')">
    <q-item class="post-card q-mb-sm shadow-1">
      <q-item-section avatar>
        <q-avatar :icon="POST_ICONS[props.post.type]" size="xl" rounded />
      </q-item-section>

      <q-item-section class="q-py-xs">
        <q-item-label class="ellipsis q-mb-none">
          {{ post.title || POST_NO_TITLE }}
        </q-item-label>

        <template v-if="post.type === 'note'">
          <q-item-label v-if="post.note" class="ellipsis text-body2">
            {{ post.note }}
          </q-item-label>
        </template>

        <template v-if="post.type === 'login'">
          <q-item-label v-if="post.resource" class="ellipsis text-body2">
            {{ post.resource }}
          </q-item-label>
        </template>
      </q-item-section>

      <q-item-section class="post-actions" side>
        <q-btn
          v-if="!post.trash"
          class="q-px-xs"
          unelevated
          round
          @click.stop="onLike"
        >
          <q-icon
            :class="post.like && 'liked'"
            :color="post.like ? 'yellow-9' : 'disabled'"
            class="post-like"
            name="star"
          />
        </q-btn>

        <q-btn
          v-if="post.trash"
          class="q-px-xs"
          unelevated
          round
          @click.stop="onRestore"
        >
          <q-icon class="post-restore" name="mdi-restore" />
        </q-btn>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { usePosts } from 'src/setups/usePosts';
import { POST_ICONS } from 'src/constants';
import { POST_NO_TITLE } from 'src/constants/lang';
import { Post } from 'src/components/models';

defineEmits(['post-click']);

const { postsStore } = usePosts();

const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});

const onLike = () => {
  postsStore.setCurrent(props.post);
  postsStore.likeCurrent();
};

const onRestore = () => {
  postsStore.setCurrent(props.post);
  postsStore.restoreCurrent();
};
</script>

<style lang="scss">
.post-card {
  height: 72px;
  padding: 0.6em;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 0px 6px 0px rgba(34, 60, 80, 0.15);
  border-radius: 6px;
  color: $grey-9;
  cursor: pointer;
  & .q-avatar {
    color: $primary;
    background-color: $grey-2;
    border-radius: 4px;
  }
  & .post-like {
    transition: all 0.1s ease-in;
    &.liked {
      transform: scale(1.2);
    }
  }
  & .post-restore {
    color: $primary;
  }
  & .post-actions {
    padding-right: 0;
  }
}
</style>
