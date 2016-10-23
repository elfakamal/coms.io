import * as ActionTypes from '../actions';
import { indexer } from '../helpers';

const steps = (state = [], action = {}) => {
  const { type } = action;

  if (type === ActionTypes.STEPS_FETCH_SUCCESS) {
    return {
      steps: [...state, ...action.payload],
      index: indexer(action.payload),
    };
  }

  return state;
};

export default steps;
