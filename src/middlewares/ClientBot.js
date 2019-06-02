import { v4 as getId } from "uuid";

class ClientBot {
  constructor(name) {
    this.name = name;
    this.authorType = "client";
    this.thinkDelay = 1000;

    this.generalReplicas = [
      "Подожди...можешь прислать мне последнюю операцию?",
      "Реплика 2",
      "Реплика 3"
    ];
  }

  thinkAboutTextMessage(message) {
    const randomIndex = Math.floor(Math.random() * this.generalReplicas.length);
    const randomReplic = this.generalReplicas[randomIndex];
    return {
      ...message,
      id: getId(),
      messageData: randomReplic,
      authorType: this.authorType
    };
  }

  thinkAboutOperationMessage(message) {
    return {
      ...message,
      authorType: this.authorType,
      id: getId()
    };
  }

  thinkAboutMessage(message) {
    return new Promise(resolve => {
      setTimeout(() => {
        switch (message.type) {
          case "text":
            return resolve(this.thinkAboutTextMessage(message));

          case "operation":
            return resolve(this.thinkAboutOperationMessage(message));

          default:
            break;
        }
      }, this.thinkDelay);
    });
  }

  replyToMessage(message) {
    return this.thinkAboutMessage(message);
  }
}

export default ClientBot;
