import React from 'react';
import './Operation.scss';

export default function Operation() {
  return(
    <div className="operation">
      <div className="operation__icon"></div>

      <div className="operation__info">
        <p className="operation__info-name">Пополнение с карты </p>
        <p className="operation__info-date">8 марта 19:21</p>
      </div>

      <p className="operation__value">+ 134 500 ₽</p>

      <div className="operation__send-btn"></div>
    </div>
  );
}