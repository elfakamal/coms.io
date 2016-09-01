import React, {PropTypes} from 'react';

import User from './User';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="coms-message">
        <header>
          <User name="toto" size="extra-small"/>
        </header>
        <section>{this.props.body}</section>
        <footer></footer>
      </div>
    );
  }
}

Message.propTypes = {
};
