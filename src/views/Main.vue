<template>
  <div class="main">
    <div class="input-container">
      <input type="text" placeholder="Precio">
      <input type="text" placeholder="Fecha">
    </div>
    <bk-button><slot>Comprobar</slot></bk-button>
    <bk-table :data="tickets"></bk-table>
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
  }
  .input-container > input {
    margin: 10px 0;
    height: 25px;
  }
</style>
