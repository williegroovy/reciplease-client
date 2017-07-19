import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import { compose, lifecycle, setDisplayName, withProps, withState, withHandlers } from 'recompose'
import { currentCard, cardActions } from '../enhancers/focusCard';

import Landing from './Pages/Landing';
import DashboardNav from './Dashboard/DashboardNav';


import FocusCardConductor from './Cards/FocusCardConductor';

import routes from '../routes';

import '../stylesheets/main.scss';

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
);

const App = (props) => {

  return(
    <Router>
      <div>
        <Route exact path="/" render={() => (
          props.authenticated ? (<Redirect to="/dashboard" />) : (<Landing />)
        )} />

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}

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

/*
    <div className="full-height">
      <Route exact path="/" component={Landing} />
      <Route exact path="/signout" component={SignOut} />
      <Route path="/edit" component={Articles} />
      <Route path="/dashboard" component={RequireAuth(DashboardHome)} />
      <FocusCardConductor currentCard={props.focusCard} clearCard={props.clearFocusCard} />
    </div>
 */