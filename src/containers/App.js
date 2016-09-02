import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Conversation from '../components/Conversation';

@connect(({ users, conversations }) => ({ users, conversations }))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    connectUser: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      connectedUser: {},
      conversations: [],
    };
  }

  loadConversations() {

  }

  render() {
    return (
      <section>
        <div>Coms.io</div>
        <button onClick={this.loadConversations}>load</button>
        <div>
          {this.state.conversations.map(conversation => <Conversation {...{ conversation }} />)}
        </div>
      </section>
    );
  }
}
