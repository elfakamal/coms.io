import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { connectUser, sayHello } from '../actions';

@connect(
  state => ({
    coms: state.coms,
  }),
  {
    connectUser, sayHello,
  }
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    connectUser: PropTypes.func,
    sayHello: PropTypes.func,
    coms: PropTypes.object.isRequired,
  };

  static defaultProps = {
    coms: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      connectedUser: {},
    };
  }

  componentDidMount() {
    this.props.sayHello();
  }

  render() {
    return (
      <div>
        <header>welcome to my brilliant app coms.io</header>
        <p>{this.props.coms.message}</p>
      </div>
    );
  }
}
