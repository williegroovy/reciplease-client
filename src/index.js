import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxThunk from 'redux-thunk';

import initialState from './reducers/initialState';

import App from './App';
import './App.css'

import Landing from './components/Landing';

import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(reduxImmutableStateInvariant(), reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, initialState, composeEnhancers());

const token = localStorage.getItem('token');

if(token) {
  //update app state
  console.log('token found', token);
  //store.dispatch({type: AUTH_USER});
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.root'));
