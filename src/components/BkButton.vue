<template>
  <button
    class="btn"
    @click="btnClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BkButton',

  methods: {
    btnClicked() {
      this.$emit('btn-clicked');
    }
  }

}
</script>

<style scoped>
  .btn {
    background: #118060;
    border-radius: 30px;
    font-size: 12px;
    color: #fff;
    height: 32px;
    border: none;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: all .15s linear;
  }
  .btn:hover {
    background: transparent;
    color: #298d70;
    border: 2px solid #298d70;
    cursor: pointer;
  }
  .btn:active {
    background-color: #298d70;
  }
</style>

