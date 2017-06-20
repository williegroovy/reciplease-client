import React from 'react';

import { SIGN_IN, SIGN_UP} from '../../constants/types';

import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const ModalConductor = (props) => {
  switch(props.currentModal) {
    case SIGN_IN:
      return <SignInModal clearModal={props.clearModal} />;

    case SIGN_UP:
      return <SignUpModal clearModal={props.clearModal} />;

    default:
      return null;
  }
};

export default ModalConductor;