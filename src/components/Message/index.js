import React from "react";
import TextMessage from './TextMessage';
import OperationMessage from './OperationMessage';
import './Message.scss';

const Message = ({message}) => {
  return (message.type === 'text') ?
    <TextMessage text={message.messageData} /> :
    <OperationMessage operation={message.messageData} />;
}

export default Message;