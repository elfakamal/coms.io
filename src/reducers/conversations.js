import * as ActionTypes from '../actions';

const conversations = (state = [], action = {}) => {
  const { type } = action;

  if (type === ActionTypes.CONVERSATIONS_FETCH_SUCCESS) {
    return [...state, ...action.payload];
  }

  return state;
};

export default conversations;
