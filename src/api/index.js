import axios from 'axios';

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
      },
    })
);

export const getTickets = () => axios.get(`${TPV_APP_API_URL}/tickets`);
