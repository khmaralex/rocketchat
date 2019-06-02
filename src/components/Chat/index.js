import React from 'react';
import MessageGroups from "components/MessageGroups";
import './Chat.scss';

class Chat extends React.Component{
  constructor(){
    super();
    this.myRef = React.createRef();
  }

  componentDidUpdate(){
    const chatNode = this.myRef.current;
    
    chatNode.scroll({
      top: chatNode.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  render(){
    return(
      <div ref={this.myRef} className="chat">
        <div className="chat-inner">
          {<MessageGroups messageGroups={this.props.messageGroups}/>}
        </div>
      </div>
    )
  }
}


export default Chat;