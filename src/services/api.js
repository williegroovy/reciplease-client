import axios from 'axios';

import { retrieveTokenFromLocalStorage } from '../reducers/index';

export const API_ROOT = 'http://localhost:3090';
console.log('headers', axios.defaults.headers);
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.common['Authorization'] =
  retrieveTokenFromLocalStorage() || '';

export const login = ({ username, password }) => {
  console.log('/login', username, password);
  return axios
    .post(`${API_ROOT}/login`, { username, password })
    .then(response => {
      console.log('response', response);
      return response.data;
    })
    .catch(error => ({ error: error }));
};

export const autoLogin = () => {
  console.log('autoLogin');
  return axios
    .post(`${API_ROOT}/validate`)
    .then(response => response.data)
    .catch(error => ({ error: error }));
};
