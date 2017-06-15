import React, { Component } from 'react'

import ModalWrapper from './ModalWrapper';
import Overlay from '../Overlay';
import SignInForm from '../Forms/SignInForm';

class SignInModal extends Component {
  constructor(props) {
    super(props);
  }

  modalStyle = {
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

  render() {
    return(
      <Overlay modalClearOnClick={false}>
        <ModalWrapper title={"Sign In"} hideModal={this.props.clearModal} style={this.modalStyle}>
          <SignInForm style={this.modalStyle}/>
        </ModalWrapper>
      </Overlay>
    );
  }
}

export default SignInModal;