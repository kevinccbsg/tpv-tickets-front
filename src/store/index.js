import Vue from 'vue';
import Vuex from 'vuex';

import tickets from './tickets/ticketsStore';
import notification from './notification/notificationsStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tickets,
    notification,
  },
});

export default store;
