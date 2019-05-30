import React from "react";
import { Link } from "react-router-dom";
import './AsideMainNav.scss';

export default function AsideMainNav(params) {
  return (
    <nav className="aside-main-nav">
      <ul>
        <li>
          <Link to="/accounts">Счета</Link>
        </li>
        <li>
          <Link to="/deposits">Вклады</Link>
        </li>
      </ul>
    </nav>
  );
}
