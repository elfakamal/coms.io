import { call, put } from 'redux-saga/effects';

import {
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from '../actions';
import { API_ROOT } from '../constants';

const fetchUsers = () => fetch(`${API_ROOT}/users`).then(res => res.json());

export default function* loadUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put({ type: USERS_FETCH_SUCCESS, payload: users });
  } catch (err) {
    yield put({ type: USERS_FETCH_FAILURE, error: err });
  }
}
