import * as ActionTypes from '../actions';

const users = (state = {}, action = {}) => {
  const { type } = action;

  if (type === ActionTypes.USERS_FETCH_RESPONSE) {
    return { ...state, ...action.payload };
  }

  return state;
};

export default users;
