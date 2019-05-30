import React from 'react';
import './Chat.scss';

export default function Chat(params) {
  return(
    <div className="chat">
      <div className="message message_client">
        <p className="message__author">Cережа</p>
        <div className="message__inner" />
      </div>
      <div className="message message_user" />
    </div>
  )
}