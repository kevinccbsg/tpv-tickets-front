<template>
  <div id="app">
    <Notification group="notify" position="top" width="100%" />
    <router-view/>
  </div>
</template>

<script>
import Notification from '@/components/Notification/Notification.vue';

export default {
  name: 'app',

  components: {
    Notification,
  },

  data() {
    return {
      currentTab: String,
    };
  },
};
</script>
