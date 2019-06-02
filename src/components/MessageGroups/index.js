import React from "react";
import MessageGroup from 'components/MessageGroup';

const MessageGroups = ({messageGroups}) => {
  
  return(
    messageGroups.map(messageGroup => {
      return <MessageGroup key={messageGroup.id} messageGroup={messageGroup}/>  
    })
  );
};

export default MessageGroups;