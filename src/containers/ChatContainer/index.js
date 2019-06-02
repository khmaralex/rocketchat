import React from "react";
import { connect } from "react-redux";
import Chat from "components/Chat";
import {v4 as getId} from "uuid";

const createMessageGroup = authorType => ({
  authorType,
  messages: [],
  id: getId()
});

const generateMessageGroups = (messages) => {
  let messageGroups = [];
  let lastAuthorType = '';
  
  messages.forEach((message) => {
    const isMessageGroupsEmpty = !messageGroups.length;
    let hasAuthorChanged;

    if(!isMessageGroupsEmpty){
      hasAuthorChanged = message.authorType !== lastAuthorType;
    }

    if(isMessageGroupsEmpty || hasAuthorChanged){
      messageGroups.push(createMessageGroup(message.authorType));
      lastAuthorType = message.authorType;
    }

    messageGroups[messageGroups.length - 1].messages.push(message);
  });

  return messageGroups;
}

const ChatContainer = ({messageGroups}) => {
  return <Chat messageGroups={messageGroups} />;
}

const mapStateToProps = state => ({
  messageGroups: generateMessageGroups(state.chat.messages)
});

export default connect(mapStateToProps)(ChatContainer);
