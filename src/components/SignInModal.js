import React, { Component } from 'react'

import ModalWrapper from './ModalWrapper';

class SignInModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ModalWrapper>
        <h1>Sign In Modal</h1>
        <p>I'm some text under here</p>
      </ModalWrapper>
    );
  }
}

export default SignInModal;