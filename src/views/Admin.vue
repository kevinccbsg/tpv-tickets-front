<template>
  <div class="admin">
    <BkHeader :title="brandName"/>
    <bk-dynamic-select :currentTab="currentTab" :tabs="tabs" @value-changed="changesHandler"></bk-dynamic-select>
  </div>
</template>

<script>
import BkDynamicSelect from '@/components/BkDynamicSelect.vue';
import BkHeader from '@/components/BkHeader.vue';

export default {
  name: 'Admin',

  data() {
    return {
      currentTab: 'Main',
      tabs: ['Main', 'PdfLoader', 'Exit'],
      brandName: 'BRIKEV'
    }
  },

  components: {
    BkHeader,
    BkDynamicSelect
  },

  methods: {
    changesHandler(selected) {
      this.currentTab = selected;
    }
  }


}
</script>
<style scoped>
  .admin {
    display: flex;
    flex-direction: column;
  }
</style>
