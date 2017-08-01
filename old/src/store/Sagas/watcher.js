import { takeLatest } from 'redux-saga/effects';

import { weatherTodaySaga } from '../../scenes/Dashboard/scenes/Weather/saga'
import { userSaga } from '../../scenes/services/User/saga';

import { LOGIN, WEATHER_TODAY } from '../../constants/types';

export function* watchUser() {
  yield takeLatest(LOGIN, userSaga);
}

export function* watchWeatherRequests() {
  yield takeLatest(WEATHER_TODAY, weatherTodaySaga);
}

