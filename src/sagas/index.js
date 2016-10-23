import 'isomorphic-fetch';
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import loadConversations from './conversations';
import loadUsers from './users';
import loadSteps from './steps';

import {
  CONVERSATIONS_FETCH_REQUEST,
  USERS_FETCH_REQUEST,
  STEPS_FETCH_REQUEST,
} from '../actions';

export default function* rootSaga() {
  yield [
    fork(loadUsers),
    fork(loadConversations),
    fork(loadSteps),
    takeLatest(USERS_FETCH_REQUEST, loadUsers),
    takeLatest(CONVERSATIONS_FETCH_REQUEST, loadConversations),
    takeLatest(STEPS_FETCH_REQUEST, loadSteps),
  ];
}
