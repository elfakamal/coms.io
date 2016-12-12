import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import routes from '../routes';
// import DevTools from './DevTools';

const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <div>
        <Router history={hashHistory} routes={routes} />
        {/* <DevTools /> */}
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default Root;
