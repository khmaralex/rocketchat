import React from "react";
import { connect } from "react-redux";
import AccountView from "components/AccountView";

const AccountViewContainer = ({ account }) => {
  return !!account && <AccountView account={account} />;
};

const mapStateToProps = ({ userData }, { match }) => {
  const accountId = Number(match.params.id);
  const account = userData.accounts.find(account => account.id === accountId);

  return { account };
};

export default connect(mapStateToProps)(AccountViewContainer);
