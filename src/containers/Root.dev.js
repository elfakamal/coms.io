import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';
import DevTools from './DevTools';

const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <div>
        <Router history={browserHistory} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
