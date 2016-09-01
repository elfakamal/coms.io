import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import DevTools from '../containers/DevTools';
import api from '../middlewares/api';
import rootReducer from '../reducers';

// import { helloSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, promiseMiddleware, api, createLogger()),
      DevTools.instrument()
    )
  );

  // sagaMiddleware.run(helloSaga);

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
