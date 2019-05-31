import React from 'react';
import './ChatPanel.scss';

export default function ChatPanel(params) {
  return(
    <div className="chat-panel">
      <div className="chat-panel-btns">
        <div className="chat-panel-btns__item chat-panel-btns__item_text">Aa</div>
        <div className="chat-panel-btns__item chat-panel-btns__item_stickers" />
        <div className="chat-panel-btns__item chat-panel-btns__item_pictures" />
        <div className="chat-panel-btns__item chat-panel-btns__item_docs" />
      </div>

      <div className="chat-panel-message">
        <textarea
          spellcheck="false"
          className="chat-panel-message__area"
          placeholder="Введите сообщение..."
        />

        <div className="chat-panel-message__btn" />
      </div>
    </div>
  )
}