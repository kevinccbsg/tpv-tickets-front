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
        :data-cy="`${tab}-select`"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="selectedTab(tab)"
      >
        <i class="material-icons">
          {{ tabsText[tab] }}
        </i>
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
    tabsText: Object,
    currentTab: String,
  },

  methods: {
    selectedTab(value) {
      return this.$emit('value-changed', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/theme/index.scss";

  .dynamic-container {
    margin-bottom: 100px;
  }
  .btn-container {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 60px;
    display: flex;
    font-weight: 700;
  }
  .tab-button {
    width: 100%;
    padding: 0;
    border: 0;
    color: $white;
    cursor: pointer;
    background-color: $brand;
    i {
      font-size: $fs-h2;
    }

    &:hover {
      background: lighten($brand, .9);
    }

    &.active {
      background-color: lighten($brand, 18%);
    }
  }
  .tab {
    padding: 10px;
  }
</style>
