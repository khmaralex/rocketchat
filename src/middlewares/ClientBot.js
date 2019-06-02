import { v4 as getId } from "uuid";
import { clientSentMessage } from "actions";

class ClientBot {
  constructor(name) {
    this.name = name;
    this.authorType = "client";
    this.thinkDelay = 1000;

    this.state = {
      isGreeted: false,
      isProblemRequested: false,
      isOperationRequested: false,
      isProblemSolved: false,
      isResult: false
    };

    this.replicas = [
      "Привет! Мне нужна помощь! 😔",
      "Отмечал первый день лета и у меня куда-то пропало около 15к, можешь узнать куда?",
      "Ищу в операциях по всем счетам, не могу найти, может ты найдешь?",
      "...поищи операцию в счетах, пожалуйста",
      "Это точно не та операция, которую хотелось бы увидеть 🤔",
      "Мдааа... 🤯! Это оно! Спасибо.",
      "Сейчас не могу ответить, занят. [Автоответчик]",
      "Ясно, это та самая лягушка Пепе из комикса Boy’s Club"
    ];
  }

  sendMessage(message, dispatch) {
    dispatch(clientSentMessage(message));
  }

  createMessage(messageData, messageType) {
    const message = {
      type: messageType,
      authorType: this.authorType,
      id: getId(),
      messageData
    };

    return message;
  }

  thinkAboutMessage(message) {
    return new Promise(resolve => {
      let answer;

      if (message.type === "sticker") {
        answer = this.createMessage(this.replicas[7], "text");
      } else {
        if (this.state.isGreeted && !this.state.isProblemRequested) {
          answer = this.createMessage(this.replicas[1], "text");
          this.state.isProblemRequested = true;
        } else if (
          this.state.isProblemRequested &&
          !this.state.isOperationRequested
        ) {
          answer = this.createMessage(this.replicas[2], "text");
          this.state.isOperationRequested = true;
        } else if (
          this.state.isOperationRequested &&
          !this.state.isProblemSolved
        ) {
          if (message.type === "text") {
            answer = this.createMessage(this.replicas[3], "text");
          } else {
            let isSameOperation = message.messageData.id === 18;

            if (isSameOperation) {
              answer = this.createMessage(this.replicas[5], "text");
              this.state.isProblemSolved = true;
              this.state.isResult = true;
            } else {
              answer = this.createMessage(this.replicas[4], "text");
            }
          }
        } else if (this.state.isProblemSolved && !this.state.isResult) {
          answer = this.createMessage(this.replicas[5], "text");
        } else {
          if (this.state.isGreeted === false) {
            this.state.isGreeted = true;
            this.state.isProblemRequested = true;
            answer = this.createMessage(this.replicas[1], "text");
          } else {
            answer = this.createMessage(this.replicas[6], "text");
          }
        }
      }

      setTimeout(() => resolve(answer), this.thinkDelay);
    });
  }

  replyToMessage(message, dispatch) {
    this.thinkAboutMessage(message).then(answer => {
      this.sendMessage(answer, dispatch);
    });
  }

  init(dispatch) {
    setTimeout(() => {
      const firstMessage = this.createMessage(this.replicas[0], "text");
      this.sendMessage(firstMessage, dispatch);
      this.state.isGreeted = true;
    }, this.thinkDelay);
  }
}

export default ClientBot;
