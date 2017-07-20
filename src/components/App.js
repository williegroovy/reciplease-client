import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import { compose, lifecycle, setDisplayName, withProps } from 'recompose'
import { currentCard, cardActions } from '../helpers/focusCard';
import protectedRoute from './HOCs/require_auth';

import Landing from './Pages/Landing';
import ProtectedRoute from './HOCs/ProtectedRoute';
import PropsRoute from './HOCs/PropsRoute';


import FocusCardConductor from './Cards/FocusCardConductor';

import dashboardRoutes from './Dashboard/dashboardRoutes';

import '../stylesheets/main.scss';

const RouteWithSubRoutes = (route) => {
  console.log('weeeee');
  return (
    <ProtectedRoute path={route.path} auth={route.auth} redirectTo={'/'} routes={route.routes} component={route.component} />
  );
};

/*
    <Route path={route.path} auth={route.auth} render={props => (
      <route.component {...props} routes={route.routes} />
    )} />
 */

const App = (props) => {
console.log('auth', props.authenticated);
  return(
    <Router>
      <div>
        <Route exact path="/" render={() => (
          props.authenticated ? (<Redirect to="/dashboard" />) : (<Landing />)
        )} />

        {dashboardRoutes.map((route, i) => {
          console.log('route', route);
          console.log('auth', props.authenticated);
          return (
            <RouteWithSubRoutes key={i} auth={props.authenticated} {...route} />
          )
        })}

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
    componentWillMount() {
      //if (this.props.authenticated) this.props.history.push('/dashboard');
    },
    componentWillReceiveProps(nextProps) {
      if(this.props.authenticated !== nextProps.authenticated && nextProps.authenticated)
        this.props.history.push('/dashboard')
    }
  })
);

export default withRouter(enhance(App));