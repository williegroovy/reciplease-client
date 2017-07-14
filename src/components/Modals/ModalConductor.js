import React from 'react';
import { compose, setDisplayName, lifecycle } from 'recompose';

import { SIGN_IN, SIGN_UP} from '../../constants/types';

import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const ModalConductor = ({ currentModal, clearModal }) => {

  switch(currentModal) {
    case SIGN_IN:
      return <SignInModal clearModal={clearModal} />;

    case SIGN_UP:
      return <SignUpModal clearModal={clearModal} />;

    default:
      return null;
  }
};

let modalFlag = 0;

let enhancer = compose(
  setDisplayName('ModalConductor'),
  lifecycle({
    shouldComponentUpdate(nextProps) {
      if (this.props.currentModal !== null && nextProps.currentModal === null) modalFlag++;
      if (modalFlag > 0) {
        console.log(modalFlag);
        if(modalFlag === 3) {
          modalFlag = 0;
          return true;
        }
        else {
          modalFlag++;
          return false;
        }
      }
      return true;
    },
  })
);

export default enhancer(ModalConductor);