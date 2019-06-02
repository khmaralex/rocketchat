import React from "react";
import MessageGroup from "components/MessageGroup";
import "./Chat.scss";

const Chat = ({ chatRef, messageGroups }) => {
  return (
    <div ref={chatRef} className="chat">
      <div className="chat-inner">
        {messageGroups.map(messageGroup => {
          return (
            <MessageGroup key={messageGroup.id} messageGroup={messageGroup} />
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
