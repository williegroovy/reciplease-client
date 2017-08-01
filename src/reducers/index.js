import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
  form: formReducer,
  auth
});

export const addTokenToLocalStorage = token =>
  localStorage.setItem('token', token);
export const retrieveTokenFromLocalStorage = () =>
  localStorage.getItem('token');
