import React, { Component } from 'react'

import ModalWrapper from './ModalWrapper';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ModalWrapper>
        <h1>Sign Up Modal</h1>
        <p>I'm some text under here</p>
      </ModalWrapper>
    );
  }
}

export default SignUpModal;