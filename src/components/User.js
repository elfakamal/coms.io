import React, {PropTypes} from 'react';

const User = (props) => {
  return (
    <div className="coms-user-name">{props.name}</div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
}

export default User;
