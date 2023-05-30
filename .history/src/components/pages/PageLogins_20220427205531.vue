<template>
  <PageContent :posts="posts" postType="login">
    <template #add-post>
      <ButtonPostAdd postType="login" />
    </template>
  </PageContent>

  <router-view name="form" v-slot="{ Component }">
    <PageDialogBottom>
      <template #form>
        <component :is="Component" />
      </template>
    </PageDialogBottom>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import ButtonPostAdd from 'src/components/partials/ButtonPostAdd.vue';
import PageDialogBottom from 'src/components/template/PageDialogBottom.vue';
// import FormAddLoginPost from 'src/components/partials/forms/FormAddLoginPost.vue';

export default defineComponent({
  name: 'PageLogins',
  components: {
    PageContent,
    ButtonPostAdd,
    PageDialogBottom,
    // FormAddLoginPost,
  },
  setup() {
    const store = usePostsStore();
    const posts = computed(() => store.postsLogins);

    return { posts };
  },
});
</script>
