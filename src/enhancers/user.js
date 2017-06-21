import { connect } from 'react-redux';

export const authenticated = () => connect(state => ({authenticated: state.auth.authenticated}));
