<template>
  <div class="main">
    <div class="form-container">
      <h3>{{ $t('ticketForm.title') }}</h3>
        <BkInput
          v-model="ticket.date"
          name="date"
          type="text"
          :required="true"
          color="secundary"
          :label="$t('ticketForm.date')"
        />
        <BkInput
          v-model="ticket.price"
          name="price"
          type="text"
          :required="true"
          color="secundary"
          :label="$t('ticketForm.price')"
        />
      <BkButton>{{ $t('ticketForm.button') }}</BkButton>
    </div>
    <div class="table-container">
      <h3>{{ $t('table.title') }}</h3>
      <BkTable :data="tickets"></BkTable>
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
      ticket: {
        date: '',
        price: '',
      },
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
  .form-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
  }
  .table-container {
    margin-top: 20px;
  }
</style>
