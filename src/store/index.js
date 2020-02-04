import Vue from 'vue';
import Vuex from 'vuex';

import tickets from './tickets/ticketsStore';
import notification from './notification/notificationsStore';
import loading from './loading/loadingStore';
import login from './Auth/authStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tickets,
    notification,
    loading,
    login,
  },
});

export default store;
