import React from "react";
import { Link } from "react-router-dom";
import './Accounts.scss';
import Account from 'components/Account';

export default function Accounts() {
  return (
    <div className="accounts">
      <Account account={{id: 123}} />
      <Account account={{id: 323}} />
      <Account account={{id: 315}} />
      <Account account={{id: 323}} />
      <Account account={{id: 333}} />
    </div>
  );
}