import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_RESPONSE,
} from '../actions';
import { API_ROOT } from '../constants';

const fetchUsers = () => fetch(`${API_ROOT}/users`).then(res => res.json());

export default function* loadUsers() {
  yield put({ type: USERS_FETCH_REQUEST });
  const users = yield call(fetchUsers);
  yield put({ type: USERS_FETCH_RESPONSE, payload: users });
}
