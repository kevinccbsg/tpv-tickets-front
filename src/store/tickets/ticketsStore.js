import groupBy from 'lodash/groupBy';
import actions from './ticketsActions';

const TITLE_KEY = 'pdfName';

export const initialState = {
  items: [],
};

export const mutations = {
  SET_ITEMS(state, payload = []) {
    state.items = [...payload];
  },
};

export const getters = {
  getByTitle: ({ items }) => groupBy(items, TITLE_KEY),
};

export default {
  state: {
    ...initialState,
  },
  actions,
  getters,
  mutations,
};
