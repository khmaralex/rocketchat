import React from "react";
import TextMessage from './TextMessage';
import StickerMessage from './StickerMessage';
import OperationMessage from './OperationMessage';
import './Message.scss';

const Message = ({message}) => {
  switch (message.type) {
    case 'text':
      return <TextMessage text={message.messageData} />
    case 'operation':
      return <OperationMessage operation={message.messageData} />;
    case 'sticker':
      return <StickerMessage image={message.messageData.image} />
    default:
      return null;
  } 
}

export default Message;