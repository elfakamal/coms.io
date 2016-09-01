import React, {PropTypes} from 'react';

export default class Invite extends React.Component {
  static propTypes = {
    User: PropTypes.object.required,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>MyComponent</div>);
  }
}
