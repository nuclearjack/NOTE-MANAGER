<template>
  <AccountsView />
  <AccountAdd />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountsView from 'components/pages/Accounts/AccountsView.vue';
import AccountAdd from 'components/pages/Accounts/AccountAdd.vue';

export default defineComponent({
  name: 'PageLoginsAdd',
  components: {
    AccountsView,
    AccountAdd,
  },
});
</script>
