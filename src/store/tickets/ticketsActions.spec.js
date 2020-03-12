import ticketsActions from './ticketsActions';
import { getData, register, uploadPDF } from '@/api';
import { NOTIFICATION_UPDATE, NOTIFICATION_UPLOAD } from '../notificationTypes';

jest.mock('@/api');

describe('Tickets actions', () => {
  it('Get tickets', async () => {
    const res = { data: ['ticket1', 'ticket2'] };
    getData.mockResolvedValueOnce(res);
    const commit = jest.fn();
    await ticketsActions.getTickets({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ITEMS', res.data);
  });

  it('Update tickets', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    register.mockResolvedValueOnce(true);
    await ticketsActions.updateTicket({ commit, dispatch });
    expect(dispatch).toHaveBeenCalledWith('getTickets');
    expect(dispatch).toHaveBeenCalledWith('sendSuccess', { text: NOTIFICATION_UPDATE.success.text, title: NOTIFICATION_UPDATE.success.title });
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false);
  });

  it('Send pdf', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    uploadPDF.mockResolvedValueOnce(true);
    await ticketsActions.sendPDF({ commit, dispatch });
    expect(commit).toHaveBeenCalledWith('SET_LOADING', true);
    expect(dispatch).toHaveBeenCalledWith('sendSuccess', { text: NOTIFICATION_UPLOAD.success.text, title: NOTIFICATION_UPLOAD.success.title });
    expect(dispatch).toHaveBeenCalledWith('getTickets');
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false);
  });
});
