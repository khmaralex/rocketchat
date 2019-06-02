import React from 'react';
import { Link } from "react-router-dom";
import './Account.scss';

const Account = ({account, isDisclosureButton}) => {
  const lastOperation = account.operations[account.operations.length - 1];

  return (
    <div className="account">
      <img className="account-image" src={account.image} />

      <div className="account-info">
        <p className="account-info__number">Счёт № {account.id}</p>
        <p className="account-info__balance">{account.balance} ₽</p>

        <p className="account-info__extra">
          {account.interestRate}% годовых <br />
          Создан: {account.creationDate} <br />
          Последнее операция: <br />
          {lastOperation.date} <br />
          (<span>{lastOperation.value} ₽</span>)
        </p>
      </div>

      {isDisclosureButton && (
        <Link
          className="account-disclousure-btn"
          to={`/accounts/${account.id}`}
        />
      )}
    </div>
  );
};

export default Account;
