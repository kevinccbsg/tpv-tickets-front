<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      currentTab: String,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
