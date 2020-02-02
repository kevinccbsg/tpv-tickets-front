<template>
  <div class="main">
    <form class="form-container" @submit.prevent="send">
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
    </form>
    <div class="tickets-container">
      <h3>{{ $t('table.title') }}</h3>
      <div
        class="table-container"
        v-for="(dataTable, index) in ticketsByTitle"
        :key="dataTable.length">
          <h4 class="tableTitle">{{ index }}</h4>
          <BkTable :data="dataTable"></BkTable>
      </div>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash/groupBy';
import { required } from 'vuelidate/lib/validators';
import { getTickets, register } from '@/api';

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
  validations() {
    return {
      ticket: {
        date: {
          required,
        },
        price: {
          required,
        },
      },
    };
  },
  computed: {
    ticketsByTitle() {
      return groupBy(this.tickets, 'pdfName');
    },
  },
  methods: {
    send() {
      const { date, price } = this.ticket;
      if (!this.$v.$invalid) {
        register({
          date,
          price,
        })
          .then(() => this.$notify({
            group: 'notify',
            title: 'Get tickets success',
            text: 'Success',
            duration: 3000,
            type: 'success',
          }))
          .catch(() => this.$notify({
            group: 'notify',
            title: 'Get tickets error',
            text: 'Error',
            duration: 3000,
            type: 'error',
          }));
      }
    },
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
  .tickets-container {
    margin-top: calculateRem(20px);
    .table-container {
      margin: calculateRem(15px) 0;
      .tableTitle {
        font-size: $fs-h4;
        padding: calculateRem(15px) 0;
      }
    }
  }
</style>
