import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConversationItem extends React.Component {
  static propTypes = {
    conversation: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.conversation.title,
    };
  }

  render() {
    const { uuid, title } = this.props.conversation;

    return (
      <div className="coms-conversation-item">
        <Link to={`/conversations/${uuid}`}>{title}</Link>
      </div>
    );
  }
}
