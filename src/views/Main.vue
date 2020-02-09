<template>
  <div class="main">
    <form class="form-container" @submit.prevent="send">
      <h3>{{ $t('ticketForm.title') }}</h3>
        <BkInput
          v-model="ticket.date"
          id="date"
          name="date"
          type="text"
          :required="true"
          data-cy="main-date-input"
          color="secundary"
          :label="$t('ticketForm.date')"
        />
        <BkInput
          v-model="ticket.price"
          id="price"
          name="price"
          type="text"
          :required="true"
          data-cy="main-price-input"
          color="secundary"
          :label="$t('ticketForm.price')"
        />
      <BkButton
        :disabled="loading"
        :isLoading="loading"
      >
        {{ $t('ticketForm.button') }}
      </BkButton>
    </form>
    <div class="tickets-container">
      <h3>{{ $t('table.title') }}</h3>
      <div
        class="table-container"
        v-for="(dataTable, index) in getByTitle"
        :key="dataTable.length">
          <h4 class="tableTitle">{{ index }}</h4>
          <BkTable :data="dataTable"></BkTable>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters, mapActions, mapMutations,
} from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Main',

  data() {
    return {
      ticket: {
        date: '',
        price: '',
      },
    };
  },

  created() {
    this.getTickets();
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
    ...mapGetters(['getByTitle', 'loading']),
  },

  methods: {
    ...mapActions(['getTickets', 'updateTicket']),
    ...mapMutations({
      setLoading: 'SET_LOADING',
    }),
    send() {
      const { date, price } = this.ticket;
      if (!this.$v.$invalid) {
        this.setLoading(true);
        this.updateTicket({
          date,
          price,
        });
      }
    },
    track () {
      this.$ga.page('/');
    }
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
        font-size: $fs-small;
        padding: calculateRem(15px) 0;
      }
    }
  }
</style>
