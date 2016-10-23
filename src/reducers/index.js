import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import conversations from './conversations';
import users from './users';
import steps from './steps';

const rootReducer = combineReducers({
  routing,
  conversations,
  users,
  steps,
});

export default rootReducer;
