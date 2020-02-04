import { doLogin } from '@/api';
import storage from '@/persistence';
import i18n from '@/lang/i18n';
import router from '@/router/routes';

const { setItem } = storage('cookieStorage');

export default {
  async login({ commit, dispatch }, payload) {
    return doLogin(payload)
      .then(({ data }) => {
        setItem('session_token', data.jwt);
        router.push('/');
      })
      .catch(() => dispatch('sendError', { title: i18n.t('notification.titleError'), text: i18n.t('notification.loginError') }))
      .finally(() => commit('SET_LOADING', false));
  },
};
