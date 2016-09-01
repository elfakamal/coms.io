import React, { PropTypes } from 'react';

export default class Conversation extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    conversation: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.conversation.title,
    };
  }

  render() {
    return (
      <section className="coms-conversation">
        <div>{this.props.conversation.title}</div>
        {this.props.children}
      </section>
    );
  }
}
