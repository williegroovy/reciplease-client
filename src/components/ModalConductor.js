import React from 'react';
import { connect } from 'react-redux';

import { SIGN_IN, SIGN_UP} from '../actions/types';

import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const ModalConductor = props => {

  switch(props.currentModal) {
    case SIGN_IN:
      return <SignInModal {...props}/>;

    case SIGN_UP:
      return <SignUpModal {...props}/>;
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