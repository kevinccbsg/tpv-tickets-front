<template>
  <nav>
    <h1 class="title">{{ title }}</h1>
  </nav>
</template>

<script>
export default {
  name: 'BkHeader',

  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    background: #108060;
    color: #FFF;
  }
</style>
