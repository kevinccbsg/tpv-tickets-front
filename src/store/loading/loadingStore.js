export const initialState = {
  loading: false,
};

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export const getters = {
  loading: state => state.loading,
};

export default {
  state: {
    ...initialState,
  },
  getters,
  mutations,
};
