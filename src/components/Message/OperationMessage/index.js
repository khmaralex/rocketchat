import React from "react";
import './OperationMessage.scss';

const OperationMessage = ({ operation }) => {
  return (
    <div className="operation-message">
      <img className="operation-message__icon" src={operation.image} />
      <p className="operation-message__name">{operation.name}</p>
      <p className="operation-message__value">{operation.value} ₽</p>
      <p className="operation-message__bonus">+n рокетрубля</p>
    </div>
  );
};

export default OperationMessage;