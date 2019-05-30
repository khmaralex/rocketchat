import React from 'react';
import { Link } from "react-router-dom";
import './Account.scss';

export default function Account(props) {
  return (
    <div className="account">
      <div className="account-image" />

      <div className="account-info">
        <p className="account-info__number">Счёт № 57890456</p>
        <p className="account-info__balance">69 650 ₽</p>

        <p className="account-info__extra">
          8% годовых <br />
          Создан: 23 января 13:55 <br />
          Последнее операция: <br />
          8 марта 19:21 (+ 3500 ₽) <br />
        </p>
      </div>

      <Link className="account-disclousure-btn" to={`/accounts/${props.account.id}`} />
    </div>
  );
}
