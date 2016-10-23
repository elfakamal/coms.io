import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import ConversationPage from './containers/ConversationPage';

export default (
  <Route path="/" component={App}>
    <Route path="/conversations/:uuid" component={ConversationPage} />
  </Route>
);
