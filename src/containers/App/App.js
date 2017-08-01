import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { setDisplayName, compose, withProps, lifecycle } from 'recompose';
import WebFontLoader from 'webfontloader';

//import { retrieveTokenFromLocalStorage } from './reducers/index';

import Landing from '../Landing/Landing';

import './App.css';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
});

const App = props => {
  //let token = retrieveTokenFromLocalStorage();

  return (
    <Router>
      <div className="app">
        <Route
          exact
          path="/"
          render={() => {
            console.log('props', props);
            return props.user
              ? <Redirect to="/dashboard" />
              : <Landing props />;
          }}
        />
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};

//let bindActions = (dispatch) => bindActionCreators(authActions, dispatch);

const enhance = compose(
  setDisplayName('App'),
  connect(mapStateToProps),
  withProps(history => history),
  withProps(location => location),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.user !== nextProps.user && nextProps.user) {
        this.props.history.push('/dashboard');
      }
    }
  })
);

export default enhance(App);
