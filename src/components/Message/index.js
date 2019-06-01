import React from "react";
import TextMessage from './TextMessage';
import OperationMessage from './OperationMessage';
import './Message.scss';

const Message = ({type}) => {
  return (type === 'text' ? <TextMessage /> : <OperationMessage />);
}

export default Message;