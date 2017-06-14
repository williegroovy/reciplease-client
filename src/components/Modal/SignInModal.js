import React, { Component } from 'react'

import ModalWrapper from './ModalWrapper';
import SignInForm from '../SignInForm';

class SignInModal extends Component {
  constructor(props) {
    super(props);
  }

  modalStyle = {
    modalWrapper: {
      background : '#fff',
      position : 'absolute',
      zIndex : 9999,
      top : '50%',
      left : '50%',
      width : '30%',
      height : '30%',
      transform : 'translate(-50%, -100%)',
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
      height : '60px',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginBottom: '20px'
    },

    button: {
      color: 'white',
      float: 'right',
      border: 'none',
      background: 'transparent'
    },

    signinForm: {
      display: 'table',
      margin: 'auto'
    }
  };

  render() {
    return(
      <ModalWrapper style={this.modalStyle}>
        <SignInForm style={this.modalStyle.signinForm}/>
      </ModalWrapper>
    );
  }
}

export default SignInModal;