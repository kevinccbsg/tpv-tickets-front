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
          placeholder="(dd-mm-yyyy)"
          data-cy="main-date-input"
          color="secundary"
          :label="$t('ticketForm.date')"
        />
        <div class="error" v-if="!$v.ticket.date.mustBeDate">{{ $t('error.dateFormat') }}</div>

        <BkInput
          v-model="$v.ticket.price.$model"
          id="price"
          name="price"
          type="text"
          :required="true"
          data-cy="main-price-input"
          color="secundary"
          :label="$t('ticketForm.price')"
        />
        <div class="error" v-if="!$v.ticket.price.mustBeDecimal || !$v.ticket.price.mmaxLength">
          {{ $t('error.priceFormat') }}
        </div>
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
        v-for="(dataTable, title) in getByTitle"
        :key="dataTable.length">
          <BkCollapse :title="title" :isOpened="isOpened">
            <BkTable :data="dataTable"></BkTable>
          </BkCollapse>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters, mapActions, mapMutations,
} from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';
import { contains, dateFormat } from '@/utils';

export default {
  name: 'Main',

  data() {
    return {
      ticket: {
        date: '',
        price: '',
      },
      isOpened: false,
      collapsibleItems: [],
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
          mustBeDate: dateFormat,
        },
        price: {
          required,
          mmaxLength: maxLength(5),
          mustBeDecimal: contains(','),
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
    track() {
      this.$ga.page('/');
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
    width: 80%;
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
      }
    }
  }
  .error {
    padding-bottom: calculateRem(10px);
    color: $error;
    font-weight: $regular;
    text-align: left;
    font-size: $fs-small;
    width: 100%;
  }
</style>
