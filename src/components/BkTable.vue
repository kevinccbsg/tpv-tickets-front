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
        <td>{{ item.price | formatPrice }}</td>
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
<style lang="scss" scoped>
  @import "@/theme/index.scss";
  $table-odd-row: #ddd;
  $table-even-row: #f2f2f2;
  table {
    width: 100%;
    text-align: center;
    font-size: $fs-medium;
    border: 1px solid $table-odd-row;
    line-height: $base-line-height;
  }
  .checkbox {
    height: 20px;
    width: 20px;
  }
  table {
    th, td {
      padding: 10px;
    }

    thead {
      background: $brand;
      color: $white;
    }

    tbody tr {
      &:nth-child(even) {
        background-color: $table-even-row;
      }

      &:hover {
        background-color: $table-odd-row;
      }
    }
  }
</style>
