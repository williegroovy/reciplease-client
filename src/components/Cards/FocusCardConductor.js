import React from 'react';
import { compose, setDisplayName, lifecycle } from 'recompose';

import { SIGN_IN, SIGN_UP} from '../../constants/types';

import SignInCard from './SignInCard';
import SignUpModal from './SignUpCard';

const FocusCardConductor = ({ currentCard, clearCard }) => {
  switch(currentCard) {
    case SIGN_IN:
      return <SignInCard clearCard={clearCard} />;

    case SIGN_UP:
      return <SignUpModal clearCard={clearCard} />;

    default:
      return null;
  }
};

let enhancer = compose(
  setDisplayName('FocusCardConductor'),
);

export default enhancer(FocusCardConductor);