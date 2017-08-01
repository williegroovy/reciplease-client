import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import { compose, lifecycle, setDisplayName, withProps } from 'recompose'
import { currentCard, cardActions } from './helpers/focusCard';

import Landing from './scenes/Landing';
import Dashboard from './scenes/Dashboard/index';
import FocusCardConductor from './scenes/services/FocusCard/FocusCardConductor';

import './stylesheets/main.scss';

const App = (props) => {
  return(
    <Router>
      <div>
        <Route exact path="/react" render={() => (
          props.authenticated ? (<Redirect to="/react/dashboard" />) : (<Landing />)
        )} />

        { Dashboard(props) }

        <FocusCardConductor currentCard={props.focusCard} clearCard={props.clearFocusCard} />
      </div>
    </Router>
  );
};

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
    componentWillReceiveProps(nextProps) {
      if(this.props.authenticated !== nextProps.authenticated && nextProps.authenticated)
        this.props.history.push('/dashboard')
    }
  })
);

export default withRouter(enhance(App));