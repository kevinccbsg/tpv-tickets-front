<template>
  <div id="app">
    <Admin />
  </div>
</template>

<script>
import Admin from '@/views/Admin.vue';

export default {
  name: 'app',

  components: {
    Admin,
  },

  data() {
    return {
      currentTab: String,
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  padding-bottom: 70px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
