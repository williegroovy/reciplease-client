import { put, call } from 'redux-saga/effects';

import { WEATHER_TODAY, WEATHER_TODAY_ERROR } from "../constants/types";

const apiCall = () => console.log('weee');

export function* weatherTodaySaga({ payload }) {
  try{
    const weatherToday = yield call(apiCall, payload);
    yield [
      put({ type: WEATHER_TODAY_SUCCESS , weatherToday }),
      put({ type: 'EXTRACT DATA', data: 'send to reducer' })
    ];
  } catch(error) {
    yield put({ type: WEATHER_TODAY_ERROR, error });
  }
}

