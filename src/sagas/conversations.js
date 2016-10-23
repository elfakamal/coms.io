import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

import {
  CONVERSATIONS_FETCH_SUCCESS,
  CONVERSATIONS_FETCH_FAILURE,
} from '../actions';
import { API_ROOT } from '../constants';

const fetchConversation = () => fetch(`${API_ROOT}/conversations`)
  .then(res => res.json());

export default function* loadConversations() {
  try {
    const conversations = yield call(fetchConversation);
    yield put({ type: CONVERSATIONS_FETCH_SUCCESS, payload: conversations });
  } catch (err) {
    yield put({ type: CONVERSATIONS_FETCH_FAILURE, error: err });
  }
}
