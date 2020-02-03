import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueNotification from 'vue-notification';
import { VueSpinners } from '@saeris/vue-spinners';
import App from './App.vue';
import '@/components/registerAsGlobal';
import i18n from '@/lang/i18n';
import './registerServiceWorker';
import router from '@/router/routes';
import store from '@/store';
import '@/theme/normalize.scss';
import '@/theme/index.scss';

import { formatCurrency } from '@/utils';

Vue.config.productionTip = false;

Vue.use(VueSpinners);

Vue.use(VueNotification, {
  componentName: 'VueNotification',
});

Vue.use(Vuelidate);

Vue.filter('formatPrice', formatCurrency);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
