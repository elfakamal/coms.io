import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import api from '../middlewares/api';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(promiseMiddleware, api)
  );
}
