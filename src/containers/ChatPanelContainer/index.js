import React from "react";
import { v4 as getId } from "uuid";
import { connect } from "react-redux";
import ChatPanel from "components/ChatPanel";
import { userSentMessage, resetChatMessages } from "actions";

class ChatPanelContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetMessages = this.resetMessages.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  resetMessages(){
    this.props.resetMessages();
  }

  sendTextMessage() {
    if (this.state.message.length > 0) {
      this.props.submitMessage({
        type: "text",
        authorType: "user",
        id: getId(),
        messageData: this.state.message
      });

      this.setState({ message: "" });
    }
  }

  handleSubmit() {
    this.sendTextMessage();
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.sendTextMessage();
    }
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <ChatPanel
        onChange={this.handleChange}
        message={this.state.message}
        onKeyPress={this.handleKeyPress}
        submitMessage={this.handleSubmit}
        resetMessages={this.resetMessages}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetMessages: () => dispatch(resetChatMessages()),
    submitMessage: message => dispatch(userSentMessage(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatPanelContainer);
