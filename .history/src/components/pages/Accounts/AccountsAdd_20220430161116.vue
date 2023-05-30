<template>
  <PageContent :posts="posts" postType="login">
    <ButtonPostAdd postType="login" />
    <DialogPostAdd :title="title">
      <template #form>
        <FormAddLoginPost />
      </template>
    </DialogPostAdd>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePostsStore } from 'src/stores/posts';
import PageContent from 'src/components/template/PageContent.vue';
import ButtonPostAdd from 'src/components/partials/ButtonPostAdd.vue';
import DialogPostAdd from 'src/components/partials/dialogs/DialogPostAdd.vue';
import FormAddLoginPost from 'src/components/partials/forms/FormAddLoginPost.vue';

export default defineComponent({
  name: 'AccountsView',
  components: {
    PageContent,
    ButtonPostAdd,
    DialogPostAdd,
    FormAddLoginPost,
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = computed(() => postsStore.posts);
    const title = ref('Новый аккаунт');

    return { posts, title };
  },
});
</script>
