<template>
  <button
    class="btn"
    :disabled="disabled"
    @click="btnClicked">
    <beat-loader :loading="isLoading" :color="'white'" :size="10" />
    <p class ="content" v-if="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'BkButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
  },

  methods: {
    btnClicked() {
      this.$emit('btn-clicked');
    },
  },

};
</script>

<style lang="scss" scoped>
  @import "@/theme/index.scss";

  .btn {
    background: $brand;
    border-radius: 8px;
    color: $white;
    height: 45px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    height: 45px;
    font-size: $fs-base;
    transition: all .15s linear;
    border: 1px solid $white;
    &:hover {
      background: lighten($brand, 20%);
    }

    &:active {
      background-color: $brand;
    }

    &:disabled {
      background: lightgrey;
    }

    .content {
      margin: 0;
    }
  }
</style>
