import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(
  ({ user }) => ({ user })
)
export default class ConversationPage extends Component {
  static propTypes = {
    conversation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    console.log('lol');
    this.loadMessages = this.loadMessages.bind(this);
  }

  state = {
    selectedConversation: undefined,
  };

  loadMessages() {
    console.log('load messages');
  }

  render() {
    const { conversation } = this.props;

    return (
      <div>Conversation page {conversation.title}</div>
    );
  }
}
