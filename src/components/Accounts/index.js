import React from "react";
import { Link } from "react-router-dom";
import './Accounts.scss';
import Account from 'components/Account';

export default function Accounts() {
  return (
    <div className="accounts">
      <Account account={{id: 123}} isDisclosureButton={true} />
      <Account account={{id: 323}} isDisclosureButton={true}/>
      <Account account={{id: 315}} isDisclosureButton={true}/>
      <Account account={{id: 323}} isDisclosureButton={true}/>
      <Account account={{id: 333}} isDisclosureButton={true}/>
    </div>
  );
}