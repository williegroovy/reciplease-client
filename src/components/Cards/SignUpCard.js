import React from 'react';
import PropTypes from 'prop-types';
import { setDisplayName, compose } from 'recompose'
import { connect } from 'react-redux';
import { Card, CardTitle, FontIcon, Media, MediaOverlay, Button } from 'react-md';

import { cardActions } from '../../enhancers/focusCard';
import { SIGN_IN } from '../../constants/types';

import Overlay from '../Overlay';
import SignUpForm from '../Forms/SignUpForm';
import { ninjaHead } from '../../constants/media';


const clearIcon = <FontIcon>clear</FontIcon>;

const renderKeyIcon = (errorMessage) => (
  !!errorMessage ? <FontIcon style={{color: 'red'}}>account_circle</FontIcon> : <FontIcon>account_circle</FontIcon>
);

const SignUpCard = (props) => (
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
        title="Register"
        subtitle="Accounts are free and fun, scouts honor!" />
      <SignUpForm />
      <Button className="md-cell--right" label="Log In" onClick={() => props.showCard(SIGN_IN)} flat iconBefore={false}>flip_to_back</Button>
    </Card>
  </Overlay>
);

SignUpCard.propTypes = {
  clearCard: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    errorMessage: state.user.error
  }
};

let enhancer = compose(
  setDisplayName('SignUnCard'),
  connect(mapStateToProps),
  cardActions()
);

export default enhancer(SignUpCard);