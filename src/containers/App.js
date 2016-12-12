import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ConversationList from '../components/ConversationList';
import Grid from '../components/Grid';
import {
  CONVERSATIONS_FETCH_REQUEST,
  // USERS_FETCH_REQUEST,
} from '../actions';

@connect(
  state => ({
    users: state.users,
    steps: state.steps,
    conversations: state.conversations,
    dispatch: state.dispatch,
  }),
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    conversations: PropTypes.arrayOf(PropTypes.shape()),
    steps: PropTypes.arrayOf(PropTypes.shape()),
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.loadConversations = this.loadConversations.bind(this);
  }

  loadConversations() {
    this.props.dispatch({ type: CONVERSATIONS_FETCH_REQUEST });
  }

  render() {
    const { children, conversations, steps } = this.props;

    const content = (
      <div>
        <button onClick={this.loadConversations}>load</button>
        <ConversationList {...{ conversations }} />
        <Grid {...{ steps }} />
      </div>
    );

    return (
      <section>
        <h1>Coms.io</h1>
        {content}
        {children}
      </section>
    );
  }
}
