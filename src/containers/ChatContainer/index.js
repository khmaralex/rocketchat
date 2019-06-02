import React from "react";
import Chat from "components/Chat";
import { v4 as getId } from "uuid";
import { connect } from "react-redux";

const createMessageGroup = authorType => ({
  authorType,
  messages: [],
  id: getId()
});

const generateMessageGroups = messages => {
  let messageGroups = [];
  let lastAuthorType = "";

  messages.forEach(message => {
    const isMessageGroupsEmpty = !messageGroups.length;
    let hasAuthorChanged;

    if (!isMessageGroupsEmpty) {
      hasAuthorChanged = message.authorType !== lastAuthorType;
    }

    if (isMessageGroupsEmpty || hasAuthorChanged) {
      messageGroups.push(createMessageGroup(message.authorType));
      lastAuthorType = message.authorType;
    }

    messageGroups[messageGroups.length - 1].messages.push(message);
  });

  return messageGroups;
};

class ChatContainer extends React.Component {
  constructor() {
    super();
    this.chatRef = React.createRef();
  }

  componentDidUpdate() {
    const chatNode = this.chatRef.current;

    chatNode.scroll({
      top: chatNode.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <Chat chatRef={this.chatRef} messageGroups={this.props.messageGroups} />
    );
  }
}

const mapStateToProps = state => ({
  messageGroups: generateMessageGroups(state.chat.messages)
});

export default connect(mapStateToProps)(ChatContainer);
