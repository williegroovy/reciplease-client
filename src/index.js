import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import { USER_AUTH, TOGGLE_CARD, SIGN_IN } from './constants/types';

import App from './components/App';

const token = localStorage.getItem('token');

// TODO: Fix security flaw so that any old token is no longer accepted.
if(token) {
  store.dispatch({type: USER_AUTH});
} else {
  store.dispatch({type: TOGGLE_CARD, payload: SIGN_IN})
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));