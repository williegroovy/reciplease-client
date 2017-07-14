import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import { AUTH_USER } from './constants/types';

import App from './components/App';

const token = localStorage.getItem('token');

// TODO: Fix security flaw so that any old token is no longer accepted.
if(token) {
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));