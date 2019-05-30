import React from "react";
import './AccountView.scss';

export default function AccountView({ match, history}) {
  function goBack(params) {
    history.goBack();
  }

  return (
    <div className="account-view">
      <h3>ID: {match.params.accountId}</h3>
      <div className="account-view__close-btn" onClick={goBack}></div>
    </div>
  );
}