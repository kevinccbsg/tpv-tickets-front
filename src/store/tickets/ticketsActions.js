import {
  getData, register, uploadPDF, deleteTicket,
} from '@/api';
import { NOTIFICATION_UPDATE, NOTIFICATION_UPLOAD, NOTIFICATION_DELETE } from '../notificationTypes';

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
  deleteTicket({ commit, dispatch, state }, id) {
    commit('SET_LOADING', true);
    return deleteTicket(id)
      .then(({ data }) => {
        const filteredItems = state.items.filter(elem => elem.id !== data.id);
        commit('SET_ITEMS', filteredItems);
        dispatch('sendSuccess', { title: NOTIFICATION_DELETE.success.title, text: NOTIFICATION_DELETE.success.text });
      })
      .catch(() => dispatch('sendError', { title: NOTIFICATION_DELETE.error.title, text: NOTIFICATION_DELETE.error.text }))
      .finally(() => commit('SET_LOADING', false));
  },
};
