import axios from 'axios';

import { API_ROOT } from '../../../constants/api';


export const userLogin = ({ username, password }) => {
  console.log('userlogin');
  return (
    axios.post(`${API_ROOT}/login`, {username, password})
      .then(response => {
        console.log('response', response.data);
        localStorage.setItem('token', response.data.token);
        return response.data;
      })
      .catch(error => error)
  )
};