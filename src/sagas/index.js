import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { loadConversations } from './conversations';
import { loadUsers } from './users';

import {
  CONVERSATIONS_FETCH_REQUEST,
  USERS_FETCH_REQUEST,
} from './actions';

export const function* rootSaga() {
	yield [
    fork(loadConversations),
    fork(loadUsers),
    takeEvery(CONVERSATIONS_FETCH_REQUEST)
  ]
}
