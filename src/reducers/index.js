import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import conversations from './conversations';
import users from './users';

const rootReducer = combineReducers({
  routing,
  conversations,
  users,
});

export default rootReducer;
