import React from 'react';
import './ChatPanel.scss';

const ChatPanel = ({ message, onChange, submitMessage, onKeyPress }) => {
  return (
    <div className="chat-panel">
      <div className="chat-panel-btns">
        <div className="chat-panel-btns__item chat-panel-btns__item_text">Aa</div>
        <div className="chat-panel-btns__item chat-panel-btns__item_stickers" />
        <div className="chat-panel-btns__item chat-panel-btns__item_pictures" />
        <div className="chat-panel-btns__item chat-panel-btns__item_docs" />
      </div>

      <div className="chat-panel-message">
        <textarea
          className="chat-panel-message__area"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
          spellCheck="false"
          placeholder="Введите сообщение..."
        />

        <div className="chat-panel-message__btn" onClick={submitMessage} />
      </div>
    </div>
  );
};

export default ChatPanel;