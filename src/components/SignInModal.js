import React, { Component } from 'react'

import ModalWrapper from './ModalWrapper';

class SignInModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ModalWrapper onClick={() => console.log('clicking modal wrapper')}>
        <h1>Modal Title</h1>
        <p>I'm some text under here</p>
      </ModalWrapper>
    );
  }
}

export default SignInModal;