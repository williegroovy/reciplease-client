import { fork, all } from 'redux-saga/effects';
import { watchAuth } from './watcher';

export default function* startForeman() {
  yield all([fork(watchAuth)]);
}
