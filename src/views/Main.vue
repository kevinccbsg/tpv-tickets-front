<template>
  <div class="main">
    <div class="input-container">
      <h2>Valida tu ticket</h2>
      <input type="text" placeholder="Precio">
      <input type="text" placeholder="Fecha">
      <bk-button><slot>Comprobar</slot></bk-button>
    </div>
    <div class="table-container">
      <h2>Tickets registrados</h2>
      <bk-table :data="tickets"></bk-table>
    </div>
  </div>
</template>

<script>
import BkTable from '@/components/BkTable.vue';
import BkButton from '@/components/BkButton.vue';
import { getTickets } from '@/api';

export default {
  name: 'Main',

  components: {
    BkTable,
    BkButton,
  },

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
