import React from 'react';
import './Deposit.scss';


export default function Deposit({deposit}) {
  const {name, cashback, period } = deposit;

  return (
    <div className="deposit">
      <p className="deposit__name">{name}</p>
      <p className="deposit__cashback">Кэшбэк: {cashback}</p>
      <p className="deposit__period">Период: {period}</p>
    </div>
  );
}