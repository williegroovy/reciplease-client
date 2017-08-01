import { USER_AUTH, USER_UNAUTH, USER_AUTH_ERROR, SET_USERNAME, SET_USER_PERMISSION } from '../../constants/types';

export default function(state = {}, { type, payload }) {
  switch(type) {
    case USER_AUTH:
      return { ...state, error: '', authenticated: true };

    case USER_UNAUTH:
      return { ...state, authenticated: false };

    case USER_AUTH_ERROR:
      return { ...state, error: payload };

    case SET_USERNAME:
      return { ...state, username: payload };

    case SET_USER_PERMISSION:
      return { ...state, permission: payload }
  }

  return state;
}