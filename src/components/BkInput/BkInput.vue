<template>
  <div class="input-container">
    <input
      :data-cy="dataCy"
      :value="value"
      :name="name"
      :type="type"
      required
      :class="color"
      @input="$emit('input', $event.target.value)"
    />
    <label :class="color">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BkInput',
  props: {
    dataCy: String,
    value: String,
    name: String,
    type: String,
    label: String,
    required: Boolean,
    color: String,
  },
};
</script>
<style lang="scss" scoped>
  @import "@/theme/index.scss";
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;
    margin: 30px 0;
    input {
      font-size: $fs-small;
      border: none;
      width: 100%;
      outline: none;
      background: none;
      height: 50px;
      &:active ~label,
      &:focus ~label,
      &:valid ~label {
        bottom: 50px;
      }
      &.primary {
        color: $white;
        border-bottom: 2px solid $white;
      }
      &.secundary {
        color: black;
        border-bottom: 2px solid black;
      }
    }
    label {
      color: $white;
      bottom: 12px;
      position: absolute;
      font-size: $fs-large;
      font-weight: 700;
      transition: all .3s ease;
      &.primary {
        color: $white;
      }
      &.secundary {
        color: black;
      }
    }
  }
</style>
