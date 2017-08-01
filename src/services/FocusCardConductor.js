import React from 'react';
import { compose, setDisplayName } from 'recompose';

export const types = {
  LOGIN_CARD: 'login_card',
  REGISTER_CARD: 'register_card'
};

const FocusCardConductor = ({ currentCard, clearCard }) => {
  switch (currentCard) {
    case types.LOGIN_CARD:
      return <SignInCard clearCard={clearCard} />;

    default:
      return null;
  }
};

let enhancer = compose(setDisplayName('FocusCardConductor'));

export default enhancer(FocusCardConductor);
