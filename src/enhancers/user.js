import { connect } from 'react-redux';
import { withHandlers } from 'recompose';

import { setUsername } from  '../store/User/actions';

export const authenticated = () => connect(state => ({ authenticated: state.auth.authenticated }));

export const username = () => connect(state => ({ username: state.auth.username }));

export const permission = () => connect(state => ({ permission: state.auth.permission }));

export const usernameAction = () => withHandlers(
  {
    setUsername: ({ dispatch }) => () => dispatch(setUsername(dispatch)),
  }
);