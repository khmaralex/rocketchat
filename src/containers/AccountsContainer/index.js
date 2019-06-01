import React from "react";
import { connect } from "react-redux";
import Accounts from "components/Accounts";

const AccountsContainer = ({accounts}) => {
  return <Accounts accounts={accounts} />
}

const mapStateToProps = state => ({ accounts: state.userData.accounts });

export default connect(mapStateToProps)(AccountsContainer);
