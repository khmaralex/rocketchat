import React from "react";
import './Accounts.scss';
import Account from 'components/Account';

const Accounts = ({ accounts }) => {
  const isAccounts = !!accounts.length;
  return (
    isAccounts && (
      <div className="accounts">
        {accounts.map(account => {
          return <Account key={account.id} account={account} isDisclosureButton={true} />;
        })}
      </div>
    )
  );
}

export default Accounts;