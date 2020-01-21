<template>
  <table>
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Precio</th>
        <th>Comprobado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.length">
        <td>{{ item.formattedDate }}</td>
        <td>{{ item.price }}</td>
        <td><input v-model="item.validated" class="checkbox" type="checkbox" disabled></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BkTable',

  props: {
    data: Array,
  },
};
</script>

<style scoped>
  table {
    margin: 25px 0;
    text-align: center;
    font-size: 1.2rem;
  }
  .checkbox {
    height: 20px;
    width: 20px;
  }
</style>
