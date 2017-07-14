import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, TOGGLE_MODAL, SET_USERNAME, SET_USER_PERMISSION} from '../../constants/types';
import { userException } from '../../constants/throw';
import { API_URL } from '../../constants/api';

export const signinUser = ({email, password}) => {
  return dispatch => {
    axios.post(`${API_URL}/signin`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_MODAL, payload: null});
      })
      .catch(error => {
        dispatch(authError('Incorrect username/password'));
        throw new userException(error);
      });
  }
};

export const signupUser = ({email, password}) => {
  return dispatch => {
    axios.post(`${API_URL}/signup`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        dispatch({type : TOGGLE_MODAL, payload: null});
      })
      .catch(error => {
        dispatch(authError('Email already in use'));
        throw new userException(error);
      });
  }
};

export const signoutUser = (dispatch) => {
  localStorage.removeItem('token');
  return dispatch({ type: UNAUTH_USER });
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

export const authError = error => ({ type: AUTH_ERROR, payload: error });