import axios from 'axios';
import storage from '@/persistence';

const { getToken } = storage('cookieStorage');

const TPV_APP_API_URL = 'https://taxi-tpv-tickets-api.herokuapp.com/api/v1';

export const doLogin = ({ username, password }) => (
  axios.post(`${TPV_APP_API_URL}/login`, {
    email: username,
    password,
  })
);

export const uploadPDF = formData => (
  axios.post(`${TPV_APP_API_URL}/tickets`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getToken(),
      },
    })
);

export const register = formData => (
  axios.post(`${TPV_APP_API_URL}/tickets/register`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getToken(),
      },
    })
);

export const getTickets = () => axios.get(`${TPV_APP_API_URL}/tickets`, {
  headers: {
    Authorization: getToken(),
  },
});
