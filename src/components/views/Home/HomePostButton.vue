<template>
  <div class="add-post-menu">
    <q-btn
      :color="$q.dark.isActive ? 'indigo-5' : 'primary'"
      :class="showAddPosts && 'active'"
      class="show-posts"
      icon="mdi-plus"
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
      <div class="post-btns flex column flex-center">
        <q-btn
          v-for="item in menu"
          :key="item.type"
          :color="$q.dark.isActive ? 'indigo-5' : 'primary'"
          :icon="item.icon"
          class="q-mb-md"
          width="40px"
          height="40px"
          round
          @click="onShowDynamicPost(item.type)"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AddPostMenu } from 'src/constants/menus/addPostMenu';
import { usePosts } from 'src/setups/usePosts';
import { Post } from 'src/components/models';

const { onShowPost } = usePosts();

const menu = ref(AddPostMenu);
const showAddPosts = ref(false);

const onShowDynamicPost = (type = 'note') => {
  onShowPost({ type } as Post);
};
</script>

<style lang="scss">
.add-post-menu {
  position: fixed;
  right: 1rem;
  bottom: 75px;
  width: 60px;
  min-height: 60px;
  & .show-posts {
    position: absolute;
    bottom: 0;
    z-index: 99;
    width: 60px;
    height: 60px;
    color: #ffffff;
    transition: transform 0.25s ease-in-out;
    &.active {
      transform: rotate(45deg);
    }
  }
  & .post-btns {
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
