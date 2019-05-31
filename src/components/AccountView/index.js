import React from "react";
import OperationsList from 'components/OperationsList';
import Account from 'components/Account';
import './AccountView.scss';

export default function AccountView({match}) {
  return (
    <div className="account-view">
      <div className="account-view-header">
        <Account account={{id: match.params.id}} isDisclosureButton={false} />
      </div>

      <div className="account-view-body">
        <p className="account-view-body__label">История операций</p>

        <OperationsList/>

      </div>
    </div>
  );
}