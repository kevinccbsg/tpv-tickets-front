<template>
  <div class="admin">
    <BkHeader :title="brandName"/>
    <bk-dynamic-select
      :currentTab="currentTab"
      :tabs="tabs"
      @value-changed="changesHandler">
    </bk-dynamic-select>
  </div>
</template>

<script>
import storage from '@/persistence';

const { removeItem } = storage('cookieStorage');

export default {
  name: 'Admin',

  data() {
    return {
      currentTab: 'Main',
      tabs: ['Main', 'PdfLoader', 'Exit'],
      brandName: 'BRIKEV',
    };
  },

  methods: {
    changesHandler(selected) {
      if (selected.includes('Exit')) {
        removeItem('session_token');
        this.$router.push({ name: 'Login' });
      }
      this.currentTab = selected;
    },
  },


};
</script>
<style scoped>
  .admin {
    display: flex;
    flex-direction: column;
  }
</style>
