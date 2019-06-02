import React from 'react';
import MessageGroups from "components/MessageGroups";
import './Chat.scss';

const Chat = ({chatRef,messageGroups}) => {
  return(
    <div ref={chatRef} className="chat">
      <div className="chat-inner">
        {<MessageGroups messageGroups={messageGroups}/>}
      </div>
    </div>
  )
}

export default Chat;