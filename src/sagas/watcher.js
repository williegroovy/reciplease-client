import { takeLatest } from 'redux-saga/effects';

import { weatherTodaySaga } from './weatherSaga'
import { userSaga } from './userSaga';

import { LOGIN, WEATHER_TODAY } from '../constants/types';

export function* watchUser() {
  yield takeLatest(LOGIN, userSaga);
}

export function* watchWeatherRequests() {
  yield takeLatest(WEATHER_TODAY, weatherTodaySaga);
}

