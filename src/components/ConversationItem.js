import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConversationItem extends React.Component {
  static propTypes = {
    conversation: PropTypes.object.isRequired,
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
      <section className="coms-conversation">
        <div><Link to={`#/conversations/${uuid}`}>{title}</Link></div>
      </section>
    );
  }
}
