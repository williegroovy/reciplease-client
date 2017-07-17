import React from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from './FoucsCard';
import Overlay from '../Overlay';
import SignUpForm from '../Forms/SignUpForm';

const SignUpModal = ({ clearModal }) => {
  return(
    <Overlay clearModal={clearModal} modalClearOnClick={false}>

    </Overlay>
  );
};

/*
 <ModalWrapper title={'Sign Up'} hideModal={clearModal}>
 <SignUpForm applyFormClass="mw-form" />
 </ModalWrapper>
 */

SignUpModal.propTypes = {
  clearModal: PropTypes.func,
};

export default SignUpModal;