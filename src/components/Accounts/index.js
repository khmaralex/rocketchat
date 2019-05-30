import React from "react";
import { Link } from "react-router-dom";
import './Accounts.scss';

export default function Accounts() {
  return (
    <div className="accounts">
      <div className="account">
        <div className="account-image" />

        <div className="account-info">
          <div className="account-info__number">Счёт № 57890456</div>
          <div className="account-info__balance">69 650 ₽</div>

          <div className="account-info__extra">
            8% годовых <br />
            Создан: 23 января 13:55 <br />
            Последнее операция: <br />
            8 марта 19:21 (+ 3500 ₽) <br />
          </div>
        </div>

        <Link className="account-disclousure-btn" to="/accounts/31234" />
      </div>
    </div>
  );
}