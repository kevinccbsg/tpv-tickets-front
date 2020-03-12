import { initialState, mutations } from './ticketsStore';

describe('Tickets store', () => {
  const state = { ...initialState };

  it('set items correctly', () => {
    const mockItems = ['item1', 'item2'];
    expect(state.items).toEqual(initialState.items);
    mutations.SET_ITEMS(state, mockItems);
    expect(state.items).toEqual(mockItems);
  });
});
