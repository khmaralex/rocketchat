import React from 'react';
import MessageGroup from 'components/MessageGroup';
import './Chat.scss';

const Chat = () => {
  return(
    <div className="chat">
      <div className="chat-inner">
        <MessageGroup authorType={'user'}/>
        <MessageGroup authorType={'client'}/>
        <MessageGroup authorType={'user'}/>
        <MessageGroup authorType={'client'}/>
        <MessageGroup authorType={'user'}/>
      </div>
    </div>
  )
}

export default Chat;