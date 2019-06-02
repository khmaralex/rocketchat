import React from "react";
import { connect } from "react-redux";
import ChatPanel from "components/ChatPanel";
import {userSentMessage, resetChatMessages} from "actions";
import {v4 as getId} from 'uuid';

class ChatPanelContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
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
        submitMessage={message => this.handleSubmit(message)}
        onKeyPress={e => this.handleKeyPress(e)}
        onChange={e => this.handleChange(e)}
        resetMessages={() => this.resetMessages()}
        message={this.state.message}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: message => dispatch(userSentMessage(message)),
    resetMessages: () => dispatch(resetChatMessages())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatPanelContainer);
