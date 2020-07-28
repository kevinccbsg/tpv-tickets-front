import axios from 'axios';
import storage from '@/persistence';

const { getToken } = storage('cookieStorage');

const TPV_APP_API_URL = 'https://taxi-tpv-tickets-api.herokuapp.com/api/v1';

const getAPIURL = async () => {
  const { data } = await axios.get('/config');
  return data.apiURL || TPV_APP_API_URL;
};

export const doLogin = async ({ username, password }) => {
  const url = await getAPIURL();
  return axios.post(`${url}/login`, {
    email: username,
    password,
  });
};

export const uploadPDF = async (formData) => {
  const url = await getAPIURL();
  return axios.post(`${url}/tickets`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getToken(),
      },
    });
};

export const register = async (body) => {
  const url = await getAPIURL();
  return axios.post(`${url}/tickets/register`,
    body,
    {
      headers: {
        Authorization: getToken(),
      },
    });
};

export const getData = async () => {
  const url = await getAPIURL();
  return axios.get(`${url}/tickets`, {
    headers: {
      Authorization: getToken(),
    },
  });
};

export const deleteTicket = async (id) => {
  const url = await getAPIURL();
  return axios.delete(`${url}/tickets/${id}`, {
    headers: {
      Authorization: getToken(),
    },
  });
};
