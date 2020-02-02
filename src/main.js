import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueNotification from 'vue-notification';
import App from './App.vue';
import '@/components/registerAsGlobal';
import i18n from '@/lang/i18n';
import './registerServiceWorker';
import router from '@/router/routes';
import '@/theme/normalize.scss';
import '@/theme/index.scss';

import { formatCurrency } from '@/utils';

Vue.config.productionTip = false;

Vue.use(VueNotification, {
  componentName: 'VueNotification',
});

Vue.use(Vuelidate);

Vue.filter('formatPrice', formatCurrency);

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
