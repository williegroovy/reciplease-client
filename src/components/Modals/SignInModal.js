import React from 'react'
import PropTypes from 'prop-types';

import ModalWrapper from './ModalWrapper';
import Overlay from '../Overlay';
import SignInForm from '../Forms/SignInForm';

const SignInModal = ({ clearModal }) => {
  return(
    <Overlay clearModal={clearModal} modalClearOnClick={false}>
      <ModalWrapper title={"Sign In"} hideModal={clearModal}>
        <SignInForm applyFromClass="mw-form" />
      </ModalWrapper>
    </Overlay>
  );
};

SignInModal.propTypes = {
  clearModal: PropTypes.func,
};

export default SignInModal;