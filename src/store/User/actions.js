import axios from 'axios';
import { TOGGLE_CARD, SIGN_IN, USER_AUTH, USER_UNAUTH, USER_AUTH_ERROR, SET_USERNAME, SET_USER_PERMISSION } from '../../constants/types';
import { API_URL } from '../../constants/api';

export const signinUser = ({username, password}) => {
  return dispatch => {
    axios.post(`${API_URL}/signin`, {username, password})
      .then(response => {
        dispatch({ type: USER_AUTH });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_CARD, payload: null});
      })
      .catch(error => {
        console.log('error');
        dispatch(authError('Unauthorized access, please try again!'));
        console.log(error);
      });
  }
};

export const signupUser = ({username, password}) => {
  return dispatch => {
    axios.post(`${API_URL}/signup`, {username, password})
      .then(response => {
        dispatch({ type: USER_AUTH });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_CARD, payload: null});
      })
      .catch(error => {
        dispatch(authError('Error creating account, please try again'));
        console.log('signupUser Error', error);
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