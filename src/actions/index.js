import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, TOGGLE_MODAL } from './types';

const API_URL = 'http://localhost:3090';

export const signinUser = ({email, password}) => {
  return dispatch => {
    axios.post(`${API_URL}/signin`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_MODAL, payload: null});
        browserHistory.push('/');
      })
      .catch(() => dispatch(authError('Incorrect username/password')));
  }
};

export const signupUser = ({email, password}) => {
  console.log('sign up user');
  console.log({email, password});
  return dispatch => {
    console.log('sign up dispatch');
    axios.post(`${API_URL}/signup`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_MODAL, payload: null});
        browserHistory.push('/');
      })
      .catch(response => dispatch(authError('Email is in use')));
  }
};

export const signoutUser = (dispatch) => {
  localStorage.removeItem('token');
  return dispatch({ type: UNAUTH_USER });
};

export const authError = error => {return { type: AUTH_ERROR, payload: error }};

export const clearModal = (dispatch) => dispatch({type : TOGGLE_MODAL, payload: null});

export const setModal = (dispatch, type, payload) => dispatch({type : type, payload : payload});