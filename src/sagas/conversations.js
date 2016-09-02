import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

import {
  CONVERSATIONS_FETCH_REQUEST,
  CONVERSATIONS_FETCH_RESPONSE,
} from '../actions';
import { API_ROOT } from '../constants';

const fetchConversation = () => fetch(`${API_ROOT}/conversations`).then(res => res.json());

export default function* loadConversations() {
  yield put({ type: CONVERSATIONS_FETCH_REQUEST });
  const conversations = yield call(fetchConversation);
  yield put({ type: CONVERSATIONS_FETCH_RESPONSE, payload: conversations });
}
