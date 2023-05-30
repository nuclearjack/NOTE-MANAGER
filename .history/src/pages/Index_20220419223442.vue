<template>
  <q-page class="home-page page-default row items-start q-pa-md">
    <!-- Все записи -->
    <q-icon
      name="mdi-apps"
      class="page-bg"
    />
    <q-list
      class="full-width"
    >
      {{ posts }}
      <!-- <PostCard
        v-for="(post, i) in posts"
        :key="i"
        :post="post"
      /> -->
    </q-list>
  </q-page>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
// import PostCard from 'src/components/cards/PostCard.vue';

const GET_POSTS = 'counterGet';

export default defineComponent({
  name: 'PageIndex',
  // components: {
  //   PostCard,
  // },
  setup() {
    const store = useStore();
    const posts = computed(() => store.getters[GET_POSTS]);
    // store.commit('posts/kek');
    // console.log(posts);

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  & .page-bg {
    border: 5px solid $indigo-5;
  }
}
</style>
