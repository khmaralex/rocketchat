import React from 'react';
import './Operation.scss';

const Operation = ({ operation, sendOperationMessage }) => {
  return (
    <div className="operation" onClick={() => sendOperationMessage(operation)}>
      <img className="operation__icon" src={operation.image} />

      <div className="operation__info">
        <p className="operation__info-name">{operation.name}</p>
        <p className="operation__info-date">{operation.date}</p>
      </div>

      <p className="operation__value">{operation.value} ₽</p>

      <div className="operation__send-btn" />
    </div>
  );
};

export default Operation;