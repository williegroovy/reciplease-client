import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../../constants/types';

export default function(state = {}, { type, payload }) {
  switch(type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    case AUTH_ERROR:
      return { ...state, error: payload };
  }

  return state;
}