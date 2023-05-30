<template>
  <AccountsView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountsView from 'components/pages/Accounts/AccountsView.vue';

export default defineComponent({
  name: 'PageLogins',
  components: {
    AccountsView,
  },
});
</script>
