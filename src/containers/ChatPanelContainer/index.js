import React from "react";
import { connect } from "react-redux";
import ChatPanel from "components/ChatPanel";
import {userSentMessage} from "actions";

class ChatPanelContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      message: ''
    };
  }

  sendTextMessage(){
    this.props.submitMessage({
      type: 'text',
      author: 'user',
      messageData: this.state.message
    });

    this.setState({message: ''});
  }

  handleSubmit(){
    this.sendTextMessage();
  }

  handleKeyPress(e){
    if (e.key === "Enter") {
      e.preventDefault();

      if(this.state.message.length > 0){
        this.sendTextMessage();
      }
    }
  }

  handleChange(e){
    this.setState({message: e.target.value});
  }

  render() {
    return (
      <ChatPanel
        submitMessage={(message) => this.handleSubmit(message)}
        onKeyPress={(e) => this.handleKeyPress(e)}
        onChange={(e) => this.handleChange(e)}
        message={this.state.message}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: message => dispatch(userSentMessage(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatPanelContainer);
