import React from "react";
import { NavLink } from "react-router-dom";
import './AsideMainNav.scss';

const AsideMainNav = () => {
  return (
    <nav className="aside-main-nav">
      <ul>
        <li>
          <NavLink to="/accounts" activeClassName="active">
            Счета
          </NavLink>
        </li>
        <li>
          <NavLink to="/deposits" activeClassName="active">
            Вклады
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AsideMainNav;