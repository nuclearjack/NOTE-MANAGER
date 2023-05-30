<template>
  <AccountAdd />
  <router-link to="/logins/add">Тык</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountAdd from 'components/pages/Accounts/AccountAdd.vue';

export default defineComponent({
  name: 'PageLoginsAdd',
  components: {
    AccountAdd,
  },
});
</script>
