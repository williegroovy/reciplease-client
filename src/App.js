import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { TOGGLE_MODAL, SIGN_IN, SIGN_UP } from './constants/types';
import { setModal, clearModal } from './store/Modal/actions';

import './App.css';

import Header from './components/Header';
import ModalConductor from './components/Modals/ModalConductor';

const enhance = compose(
  connect(
    state => {
      return {
        currentModal: state.modal.currentModal,
        authenticated: state.auth.authenticated
      };
    },
    dispatch => {
    return {
      dispatch: dispatch
    };
  })
);


const App = enhance(({ authenticated, children, currentModal, dispatch }) => {

  const child = React.cloneElement(children);

  const signInModal = () => dispatch(setModal(dispatch, TOGGLE_MODAL, SIGN_IN));
  const signUpModal = () => dispatch(setModal(dispatch, TOGGLE_MODAL, SIGN_UP));
  const clear = () => dispatch(clearModal(dispatch));

  return (
    <div className="container">
      <Header authenticated={authenticated} toggleSignInModal={signInModal} toggleSignUpModal={signUpModal} />
      <div className="container">
        {child}
      </div>
      <ModalConductor currentModal={currentModal} clearModal={clear} />
    </div>
  );
});

export default App;