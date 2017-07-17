import { connect } from 'react-redux';
import { withHandlers } from 'recompose';

import { setUsername } from  '../store/User/actions';

export const authenticated = () => connect(state => ({ authenticated: state.user.authenticated }));

export const username = () => connect(state => ({ username: state.user.username }));

export const permission = () => connect(state => ({ permission: state.user.permission }));

export const usernameAction = () => withHandlers(
  {
    setUsername: ({ dispatch }) => () => dispatch(setUsername(dispatch)),
  }
);