<template>
  <PageContent :posts="posts" postType="login">
    <template #add-post>
      <ButtonPostAdd postType="login" />
    </template>
  </PageContent>
  <router-view>
    <template #form>
      <FormAddLoginPost />
    </template>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import ButtonPostAdd from 'src/components/partials/ButtonPostAdd.vue';
import FormAddLoginPost from 'src/components/partials/forms/FormAddLoginPost.vue';

export default defineComponent({
  name: 'PageLogins',
  components: {
    PageContent,
    ButtonPostAdd,
    FormAddLoginPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLogins);

    return { posts };
  },
});
</script>
