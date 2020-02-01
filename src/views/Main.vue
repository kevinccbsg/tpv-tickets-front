<template>
  <div class="main">
    <div class="input-container">
      <h3>{{ $t('ticketForm.title') }}</h3>
      <input type="text" :placeholder="$t('ticketForm.price')">
      <input type="text" :placeholder="$t('ticketForm.date')">
      <bk-button>{{ $t('ticketForm.button') }}</bk-button>
    </div>
    <div class="table-container">
      <h3>{{ $t('table.title') }}</h3>
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

<style lang="scss" scoped>
  @import "@/theme/index.scss";
  .main {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    h3 {
      text-align: center;
      font-size: $fs-h3;
      line-height: $base-line-height;
    }
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;

    > input {
      margin: 10px 0;
      height: 40px;
    }
  }
  .table-container {
    margin-top: 20px;
  }
</style>
