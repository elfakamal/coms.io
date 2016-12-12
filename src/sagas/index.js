import 'isomorphic-fetch';
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import loadConversations from './conversations';
import loadUsers from './users';

import {
  CONVERSATIONS_FETCH_REQUEST,
  USERS_FETCH_REQUEST,
} from '../actions';

export default function* rootSaga() {
  yield [
    fork(loadUsers),
    fork(loadConversations),
    takeLatest(USERS_FETCH_REQUEST, loadUsers),
    takeLatest(CONVERSATIONS_FETCH_REQUEST, loadConversations),
  ];
}
