import * as ActionTypes from '../actions';

const coms = (state = {}, action = {}) => {
  // console.log('my brilliant reducer :: coms');

  const { type } = action;

  if (type === ActionTypes.CONNECT_USER_REQUEST) {
    return { ...state, user: action.user };
  } else if (type === 'SAY_HELLO') {
    return { ...state, message: 'hello world' };
  }

  return state;
};

export default coms;
