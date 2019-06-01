import React from "react";
import { connect } from "react-redux";
import Deposits from "components/Deposits";

const DepositsContainer = ({deposits}) => {
  return <Deposits deposits={deposits} />
}

const mapStateToProps = state => ({ deposits: state.userData.deposits });

export default connect(mapStateToProps)(DepositsContainer);
