import React from "react";
import './OperationMessage.scss';

const OperationMessage = () => {
  return(
    <div className="operation-message">
      <div className="operation-message__icon"></div>
      <p className="operation-message__name">Перекресток Экспресс</p>
      <p className="operation-message__value">- 6200 ₽</p>
      <p className="operation-message__bonus">+62 рокетрубля</p>
    </div>
  );
}

export default OperationMessage;