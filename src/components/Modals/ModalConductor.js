import React from 'react';
import { connect } from 'react-redux';

import { SIGN_IN, SIGN_UP} from '../../constants/types';
import { clearModal } from '../../store/Modal/actions';

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

const mapDispatchToProps = (dispatch) => {
  return {
  clearModal: () => dispatch(clearModal)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);