import axios from 'axios';

const TPV_APP_API_URL = 'https://taxi-tpv-tickets-api.herokuapp.com/api/v1';

export const doLogin = ({ username, password }) => {
  return axios.post(`${TPV_APP_API_URL}/login`, {
    email: username,
    password,
  });
};
