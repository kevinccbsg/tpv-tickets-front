<template>
  <table>
    <thead>
      <tr>
        <th>{{ $t('table.date') }}</th>
        <th>{{ $t('table.price') }}</th>
        <th>{{ $t('table.validated') }}</th>
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
    border: 1px solid #ddd;
  }
  table th,
  table td {
    padding: 10px;
  }
  table thead {
    background: #108060;
    color: #FFF;
  }
  table tbody tr:nth-child(even){background-color: #f2f2f2;}

  table tbody tr:hover {background-color: #ddd;}
</style>

<style scoped>
  table {
    width: 100%;
    margin: 25px 0;
    text-align: center;
    font-size: 1.2rem;
  }
  .checkbox {
    height: 20px;
    width: 20px;
  }
</style>
