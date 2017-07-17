import React from 'react'
import PropTypes from 'prop-types';

import { Card, CardTitle, FontIcon, Media } from 'react-md';

import FocusCard from './FoucsCard';
import Overlay from '../Overlay';
import SignInForm from '../Forms/SignInForm';
import { ninjaHead } from '../../constants/media';

const clearIcon = <FontIcon>clear</FontIcon>;

//clearPresentation, clearOverlayOnClick, clearIcon, children

const SignInCard = ({ clearCard }) => {
  return(
  <Overlay clearIcon={clearIcon} clearPresentation={clearCard} clearOverlayOnClick={false}>
    <Card className="card md-block-centered" style={{padding: 20}}>
      <Media>
        <img src={ninjaHead} role="presentation" />
      </Media>
      <CardTitle
        avatar={<FontIcon>vpn_key</FontIcon>}
        title="Log In"
        subtitle="Demo User: demo - pass123" />
      <SignInForm />
    </Card>
  </Overlay>
)};

SignInCard.propTypes = {
  clearCard: PropTypes.func,
};

export default SignInCard;