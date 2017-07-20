import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDisplayName, compose } from 'recompose';
import { Card, CardTitle, FontIcon, Media, MediaOverlay, Button } from 'react-md';

import { cardActions } from '../../helpers/focusCard';
import { SIGN_UP } from '../../constants/types';

import FocusCard from './FoucsCard';
import Overlay from '../HOCs/Overlay';
import SignInForm from '../Forms/SignInForm';
import { ninjaHead } from '../../constants/media';

const signInCardPropTypes = {
  clearCard: PropTypes.func,
};

const clearIcon = <FontIcon>clear</FontIcon>;

const renderKeyIcon = (errorMessage) => (
  !!errorMessage ? <FontIcon style={{color: 'red'}}>vpn_key</FontIcon> : <FontIcon>vpn_key</FontIcon>
);

const SignInCard = (props) => (
  <Overlay clearIcon={clearIcon} clearPresentation={props.clearCard} clearOverlayOnClick={false}>
    <Card className="card md-block-centered" style={{padding: 20}}>
      <Media>
        <img src={ninjaHead} role="presentation" />
        {!!props.errorMessage ?
          <MediaOverlay id="signinOverlay">
          <CardTitle title="Log In Error" subtitle={props.errorMessage}>
            <FontIcon className="md-cell--right" style={{color: 'red'}}>security</FontIcon>
          </CardTitle>
        </MediaOverlay> : null}
      </Media>
      <CardTitle
        avatar={renderKeyIcon(props.errorMessage)}
        title="Log In"
        subtitle="Demo User: demo - pass123" />
      <SignInForm />
      <Button className="flip-card-btn md-cell--right" label="Register" onClick={() => props.showCard(SIGN_UP)} flat iconBefore={false} >flip_to_back</Button>
    </Card>
  </Overlay>
);

SignInCard.propTypes = signInCardPropTypes;

const mapStateToProps = state => {
  return {
    errorMessage: state.user.error
  }
};

let enhancer = compose(
  setDisplayName('SignInCard'),
  connect(mapStateToProps),
  cardActions()
);

export default enhancer(SignInCard);