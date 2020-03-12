import { getData, register, uploadPDF } from '@/api';
import { NOTIFICATION_UPDATE, NOTIFICATION_UPLOAD } from '../notificationTypes';

export default {
  getTickets({ commit }) {
    return getData()
      .then(({ data }) => commit('SET_ITEMS', data));
  },
  updateTicket({ commit, dispatch }, payload) {
    return register(payload)
      .then(() => {
        dispatch('sendSuccess', { title: NOTIFICATION_UPDATE.success.title, text: NOTIFICATION_UPDATE.success.text });
        dispatch('getTickets');
      })
      .catch(() => dispatch('sendError', { title: NOTIFICATION_UPDATE.error.title, text: NOTIFICATION_UPDATE.error.text }))
      .finally(() => commit('SET_LOADING', false));
  },
  sendPDF({ commit, dispatch }, payload) {
    commit('SET_LOADING', true);
    return uploadPDF(payload)
      .then(() => {
        dispatch('sendSuccess', { title: NOTIFICATION_UPLOAD.success.title, text: NOTIFICATION_UPLOAD.success.text });
        dispatch('getTickets');
      })
      .catch(() => dispatch('sendError', { title: NOTIFICATION_UPLOAD.error.title, text: NOTIFICATION_UPLOAD.error.text }))
      .finally(() => commit('SET_LOADING', false));
  },
};
