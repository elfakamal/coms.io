import { combineReducers } from 'redux';

import conversations from './conversations';
import users from './users';

const rootReducer = combineReducers({ conversations, users });
export default rootReducer;
