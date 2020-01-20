<template>
  <div class="dynamic-container">
    <keep-alive>
      <component class="content" v-bind:is="currentTab">
      </component>
    </keep-alive>

    <div class="btn-container">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="selectedTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script>
import Main from '@/views/Main.vue';
import PdfLoader from '@/components/PdfLoader.vue';

export default {
  name: 'BkDynamicSelect',

  components: {
    Main,
    PdfLoader,
  },

  props: {
    tabs: Array,
    currentTab: String,
  },

  methods: {
    selectedTab(value) {
      return this.$emit('value-changed', value);
    },
  },
};
</script>

<style scoped>
  .btn-container {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 60px;
    display: flex;
    font-weight: 700;
    border-bottom: 1px solid #e0e0e0;
  }
  .tab-button {
    width: 100%;
    padding: 0;
    border: 0;
    color: #FFF;
    cursor: pointer;
    background: #118060;
  }
  .tab-button:hover {
    background: #118060;
  }
  .tab-button.active {
    background-color: #0d5f48;
  }
  .tab {
    /* border: 1px solid #ccc; */
    padding: 10px;
  }
</style>
