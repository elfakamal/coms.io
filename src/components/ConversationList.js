import React, { PropTypes } from 'react';
import map from 'lodash/map';

import ConversationItem from './ConversationItem';

const ConversationList = ({ conversations }) => (
  <div>
    {map(conversations, (conversation, key) => <ConversationItem {...{ conversation, key }} />)}
  </div>
);

ConversationList.propTypes = {
  conversations: PropTypes.array,
};

export default ConversationList;
