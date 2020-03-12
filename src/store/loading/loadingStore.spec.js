import { initialState, mutations } from './loadingStore';

describe('Loading store', () => {
  const state = { ...initialState };

  it('set loading correctly', () => {
    expect(state.loading).toEqual(initialState.loading);
    mutations.SET_LOADING(state, true);
    expect(state.loading).toEqual(true);
  });
});
