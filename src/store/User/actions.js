import axios from 'axios';
import { TOGGLE_CARD, SIGN_IN, USER_AUTH, USER_UNAUTH, USER_AUTH_ERROR, SET_USERNAME, SET_USER_PERMISSION } from '../../constants/types';
import { API_URL } from '../../constants/api';

export const signinUser = ({username, password}) => {
  return dispatch => {
    console.log("dispatch sign in");
    axios.post(`${API_URL}/signin`, {username, password})
      .then(response => {
        dispatch({ type: USER_AUTH });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_CARD, payload: null});
      })
      .catch(error => {
        console.log('error');
        dispatch(authError('Incorrect username/password'));
        throw error;
      });
  }
};

export const signupUser = ({email, password}) => {
  return dispatch => {
    axios.post(`${API_URL}/signup`, {email, password})
      .then(response => {
        dispatch({ type: USER_AUTH });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_CARD, payload: null});
      })
      .catch(error => {
        dispatch(authError('Email already in use'));
        throw error;
      });
  }
};

export const signoutUser = (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: TOGGLE_CARD, payload: SIGN_IN});
  return dispatch({ type: USER_UNAUTH });
};

export const setUsername = username => {
  return dispatch => {
    dispatch({ type: SET_USERNAME , payload: username })
  }
};

export const setUserPermission = permissionLevel => {
  return dispatch => {
    dispatch({ type: SET_USER_PERMISSION, payload: permissionLevel })
  }
};

export const authError = error => ({ type: USER_AUTH_ERROR, payload: error });