<template>
  <div class="main">
    <div class="input-container">
      <input type="text" placeholder="Precio">
      <input type="text" placeholder="Fecha">
    </div>
    <bk-button><slot>Comprobar</slot></bk-button>
    <bk-table></bk-table>
  </div>
</template>

<script>
import BkTable from '@/components/BkTable.vue';
import BkButton from '@/components/BkButton.vue';

export default {
  name: 'Main',

  components: {
    BkTable,
    BkButton,
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
