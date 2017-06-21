import React from 'react'
import PropTypes from 'prop-types';

import ModalWrapper from './ModalWrapper';
import Overlay from '../Overlay';
import SignInForm from '../Forms/SignInForm';

const modalStyle = {
  pageCenter: {
    position : 'fixed',
    top : '20%',
    left : '50%',
  },

  modalWrapper: {
    background : '#fff',
    zIndex : 9999,
    position: 'relative',
    left: '-50%',
    width : '350px',
    height : '300px',
    borderRadius : '2px'
  },

  title: {
    color: 'white',
    marginTop: '0px',
    marginBottom: '0px'
  },

  verticalAlign: {
    transform: 'translateY(50%)'
  },

  head: {
    background: '#2196F3',
    height : '50px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginBottom: '40px'
  },

  button: {
    color: 'white',
    float: 'right',
    border: 'none',
    background: 'transparent'
  },

  svgStyle: {
    height: 30,
    width: 30,
    right: 30,
    marginTop: 2,
    position: 'absolute'
  },

  form: {
    width: '100%'
  }
};

const SignInModal = ({ clearModal }) => {
  return(
    <Overlay clearModal={clearModal} modalClearOnClick={false}>
      <ModalWrapper title={"Sign In"} hideModal={clearModal} style={modalStyle}>
        <SignInForm style={modalStyle}/>
      </ModalWrapper>
    </Overlay>
  );
};

SignInModal.propTypes = {
  clearModal: PropTypes.func,
};

export default SignInModal;