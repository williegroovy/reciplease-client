import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose, lifecycle, setDisplayName, withProps, withState, withHandlers } from 'recompose'
import { currentCard, cardActions } from '../enhancers/focusCard';

import Landing from './Landing';
import AccountHome from './AccountHome/AccountHome';
import Articles from './Articles';
import SignOut from './SignOut';
import RequireAuth from './require_auth';
import FocusCardConductor from './Cards/FocusCardConductor';

import '../stylesheets/main.scss';
//
const App = (props) => (
  <div className="full-height">
    <Route exact path="/" component={Landing} />
    <Route exact path="/signout" component={SignOut} />
    <Route path="/edit" component={Articles} />
    <Route path="/account" component={RequireAuth(AccountHome)} />
    <FocusCardConductor currentCard={props.focusCard} clearCard={props.clearFocusCard} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated
  }
};

const enhance = compose(
  setDisplayName('Richardson Demo'),
  connect(mapStateToProps),
  withProps(history => history),
  withProps(location => location),
  currentCard(),
  cardActions(),
  lifecycle({
    componentWillMount() {
      if (this.props.authenticated) this.props.history.push('/account');
    },
    componentWillReceiveProps(nextProps) {
      if(this.props.authenticated !== nextProps.authenticated && nextProps.authenticated)
        this.props.history.push('/account')
    }
  })
);

export default withRouter(enhance(App));