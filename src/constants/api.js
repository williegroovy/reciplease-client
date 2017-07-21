import axios from 'axios';

export const API_ROOT = 'http://localhost:3090';
export const LOGIN_IN = `${API_ROOT}/login`;
export const LOGIN_OUT = `${API_ROOT}/logout`;

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