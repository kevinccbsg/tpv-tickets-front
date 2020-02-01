<template>
  <div class="main">
    <div class="input-container">
      <h2>{{ $t('ticketForm.title') }}</h2>
      <input type="text" :placeholder="$t('ticketForm.price')">
      <input type="text" :placeholder="$t('ticketForm.date')">
      <bk-button>{{ $t('ticketForm.button') }}</bk-button>
    </div>
    <div class="table-container">
      <h2>{{ $t('table.title') }}</h2>
      <bk-table :data="tickets"></bk-table>
    </div>
  </div>
</template>

<script>
import { getTickets } from '@/api';

export default {
  name: 'Main',

  data() {
    return {
      tickets: [],
    };
  },

  created() {
    getTickets()
      .then(({ data }) => {
        this.tickets = data;
      });
  },
};
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
  }
  .input-container > input {
    margin: 10px 0;
    height: 25px;
  }
  .table-container {
    margin-top: 20px;
  }
  .table-container h2 {
    text-align: center;
  }
</style>
