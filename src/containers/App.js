import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Conversation from '../components/Conversation';

@connect(
  ({ users, conversations }) => ({ users, conversations })
)
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

  render() {
    return (
      <section>
        Coms.io
        {this.state.conversations.map(conversation => <Conversation {...{ conversation }} />)}
      </section>
    );
  }
}
