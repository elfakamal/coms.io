import React, { PropTypes } from 'react';
import map from 'lodash/map';

import ConversationItem from './ConversationItem';

const ConversationList = ({ conversations }) => (
  <div className="coms-conversation-list">
    {map(conversations, (conversation, key) => <ConversationItem {...{ conversation, key }} />)}
  </div>
);

ConversationList.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.shape()),
};

export default ConversationList;
