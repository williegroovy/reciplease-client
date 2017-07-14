import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SET_USERNAME, SET_USER_PERMISSION } from '../../constants/types';

export default function(state = {}, { type, payload }) {
  switch(type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    case AUTH_ERROR:
      return { ...state, error: payload };

    case SET_USERNAME:
      return {... state, username: payload };

    case SET_USER_PERMISSION:
      return { ...state, permission: payload}
  }

  return state;
}