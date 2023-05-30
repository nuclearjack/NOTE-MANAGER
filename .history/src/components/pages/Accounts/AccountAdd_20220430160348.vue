<template>
  <div>
    <DialogPostAdd :title="title">
      <template #form>
        <FormAddLoginPost />
      </template>
    </DialogPostAdd>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DialogPostAdd from 'src/components/partials/dialogs/DialogPostAdd.vue';
import FormAddLoginPost from 'src/components/partials/forms/FormAddLoginPost.vue';
// import FormAddNotePost from 'src/components/partials/forms/FormAddNotePost.vue';
// import FormAddCardPost from 'src/components/partials/forms/FormAddCardPost.vue';

export default defineComponent({
  name: 'PostsView',
  components: {
    DialogPostAdd,
    FormAddLoginPost,
  },
  setup() {
    const title = ref('Новый аккаунт');
    console.log('Аккаунты modal');

    return { title };
  },
});
</script>
