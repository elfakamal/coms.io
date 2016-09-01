import React, { PropTypes } from 'react';

const Counter = ({ value, onIncrementAsync }) => (
  <div>
    {' '}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.string,
  onIncrementAsync: PropTypes.func,
};

export default Counter;
