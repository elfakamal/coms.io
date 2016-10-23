import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 * Configuring the store
 */
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, promiseMiddleware, createLogger()),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
