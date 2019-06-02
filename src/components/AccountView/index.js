import React from "react";
import OperationsList from 'components/OperationsList';
import Account from 'components/Account';
import './AccountView.scss';

const AccountView = ({ account }) => {
  return (
    <div className="account-view">
      <div className="account-view-header">
        <Account account={account} isDisclosureButton={false} />
      </div>

      <div className="account-view-body">
        <p className="account-view-body__label">История операций</p>

        <OperationsList operations={account.operations} />
      </div>
    </div>
  );
};

export default AccountView;