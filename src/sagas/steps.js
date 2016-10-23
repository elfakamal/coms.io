import { call, put } from 'redux-saga/effects';

import {
  STEPS_FETCH_SUCCESS,
  STEPS_FETCH_FAILURE,
} from '../actions';
import { API_ROOT } from '../constants';

const fetchSteps = () => fetch(`${API_ROOT}/steps`).then(res => res.json());

export default function* loadSteps() {
  try {
    const steps = yield call(fetchSteps);
    yield put({ type: STEPS_FETCH_SUCCESS, payload: steps });
  } catch (err) {
    yield put({ type: STEPS_FETCH_FAILURE, error: err });
  }
}
