import React from "react";
import Message from 'components/Message';
import './MessageGroup.scss';

export default function MessageGroup({authorType}) {
  const isUserMessageGroup = (authorType === 'user') ? ` message-group_user` : '';

  return(
    <div className={'message-group' + isUserMessageGroup}>
      <p className="message-group__author">Сережа</p>

      <div className="message-group__wrapper">
        <div className="message-group__author-icon"></div>

        <div className="message-group__inner">
          <Message type={'text'}/>
          <Message type={'text'}/>
          <Message type={'text'}/>
          <Message type={'operation'}/>
        </div>
      </div>
    </div>
  );
};