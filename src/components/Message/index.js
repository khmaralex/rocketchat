import React from "react";
import TextMessage from './TextMessage';
import OperationMessage from './OperationMessage';
import './Message.scss';

export default function Message({type}) {
  return (type === 'text' ? <TextMessage /> : <OperationMessage />);
}