import { takeLatest } from 'redux-saga/effects';

import { authSaga } from './auth';
import { types } from '../reducers/auth';

export function* watchAuth() {
  yield takeLatest(types.LOGIN, authSaga);
  yield takeLatest(types.AUTO_LOGIN, authSaga);
}
