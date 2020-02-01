import Vue from 'vue';
import App from './App.vue';
import '@/components/registerAsGlobal';
import i18n from '@/lang/i18n';
import './registerServiceWorker';
import router from '@/router/routes';
import '@/theme/normalize.scss';
import '@/theme/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
