import { fork } from 'redux-saga/effects';
import { watchUser, watchWeatherRequests } from './watcher';

export default function* startForman() {
  yield fork(watchUser);
  yield fork(watchWeatherRequests);
}