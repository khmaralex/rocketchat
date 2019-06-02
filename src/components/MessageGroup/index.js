import React from "react";
import Message from 'components/Message';
import './MessageGroup.scss';

const MessageGroup = ({messageGroup}) => {
  const {authorType, messages} = messageGroup;
  const isUserMessageGroup = (authorType === 'user') ? ` message-group_user` : '';

  return(
    <div className={'message-group' + isUserMessageGroup}>
      <p className="message-group__author">Сережа</p>

      <div className="message-group__wrapper">
        <div className="message-group__author-icon"></div>

        <div className="message-group__inner">
          {messages.map(message => <Message key={message.id} message={message}/>)}
        </div>
      </div>
    </div> 
  );
};

export default MessageGroup;