import React from 'react';
import { connect } from 'react-redux';

import { SIGN_IN } from '../actions/types';

import SignInModal from './SignInModal';

const ModalConductor = props => {

  switch(props.currentModal) {
    case SIGN_IN:
      return <SignInModal {...props}/>;

    default:
      return null;
  }
};

const mapStateToProps = state => {
  return {
    currentModal : state.modal.currentModal
  }
};

export default connect(mapStateToProps)(ModalConductor);