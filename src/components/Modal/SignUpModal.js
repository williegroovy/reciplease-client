import React, { Component } from 'react'

import ModalWrapper from './ModalWrapper';
import SignUpForm from '../SignUpForm';

class SignUpModal extends Component {
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
      height : '70%',
      transform : 'translate(-50%, -50%)',
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
      marginBottom: '50px'
    },

    button: {
      color: 'white',
      float: 'right',
      border: 'none',
      background: 'transparent'
    }
  };

  render() {
    return(
      <ModalWrapper title={'Sign Up'} hideModal={this.props.clearModal} style={this.modalStyle}>
        <div>
          <SignUpForm/>
        </div>
      </ModalWrapper>
    );
  }
}

export default SignUpModal;