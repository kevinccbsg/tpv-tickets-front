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
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: left;
  }
</style>