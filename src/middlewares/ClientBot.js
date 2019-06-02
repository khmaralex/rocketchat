import { v4 as getId } from "uuid";
import { clientSentMessage } from "actions";

class ClientBot {
  constructor(name) {
    this.name = name;
    this.authorType = "client";
    this.thinkDelay = 1000;

    this.replicas = [
      "Привет! Мне нужна помощь!",
      "Можешь прислать мне последнюю операцию?",
      "Реплика 3",
      "Реплика 4",
      "Реплика 5",
      "Реплика 6",
      "Реплика 7"
    ];
  }

  sendMessage(message, dispatch){
    dispatch(clientSentMessage(message));
  }

  createMessage(messageData, messageType){
    const message = {
      type: messageType,
      authorType: this.authorType,
      id: getId(),
      messageData
    };

    return message;
  }

  getAnswerAfterTextMessage() {
    const randomIndex = Math.floor(Math.random() * this.replicas.length);
    const randomReplic = this.replicas[randomIndex];

    return this.createMessage(randomReplic, 'text');
  }

  getAnswerAfterOperationMessage(message) {
    return {
      ...message,
      authorType: this.authorType,
      id: getId()
    };
  }

  thinkAboutMessage(message) {
    return new Promise(resolve => {
      let answer;
      
      if(message.type === "text"){
        answer = this.getAnswerAfterTextMessage()
      }else{
        answer = this.getAnswerAfterOperationMessage(message);
      }      
      
      setTimeout(() => resolve(answer), this.thinkDelay);
    });
  }

  replyToMessage(message, dispatch) {
    this.thinkAboutMessage(message).then(answer => {
      this.sendMessage(answer, dispatch);
    })
  }

  sayHi(dispatch){
    setTimeout(() => {
      const message = this.createMessage(this.replicas[0], 'text');
      this.sendMessage(message, dispatch);
    }, this.thinkDelay); 
  }
}

export default ClientBot;
