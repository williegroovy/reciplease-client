import { put, call } from 'redux-saga/effects';

import { types } from '../reducers/auth';

import { api } from '../services/index';
import { addTokenToLocalStorage } from '../reducers/index';

export function* authSaga({ username, password, token }) {
  yield put({ type: types.LOGIN_REQUEST });
  const response = yield call(api.login, { username, password });
  console.log('response', response);
  if (response.error) {
    yield put({ type: types.LOGIN_FAILURE, payload: response.error });
  } else {
    yield put({ type: types.LOGIN_SUCCESS, payload: response.user });
    yield call(addTokenToLocalStorage, response.token);
  }
}
