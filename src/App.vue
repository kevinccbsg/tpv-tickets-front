<template>
  <div id="app">
    <BkHeader :title="brandName"/>
    <div class="input-container">
      <input type="text" placeholder="Precio">
      <input type="text" placeholder="Fecha">
    </div>
    <bk-button><slot>Comprobar</slot></bk-button>
    <bk-table></bk-table>
  </div>
</template>

<script>
import BkHeader from '@/components/BkHeader.vue';
import BkButton from '@/components/BkButton.vue';
import BkTable from '@/components/BkTable.vue';

export default {
  name: 'app',

  components: {
    BkButton,
    BkTable,
    BkHeader
  },

  data() {
    return {
      brandName: 'BRIKEV'
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.input-container {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.input-container > input {
  margin: 10px 0;
  height: 25px;
}
</style>
