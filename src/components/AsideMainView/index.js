import React from "react";
import { Route } from "react-router-dom";
import AccountsContainer from "containers/AccountsContainer";
import DepositsContainer from "containers/DepositsContainer";
import "./AsideMainView.scss";

const AsideMainView = () => {
  return (
    <div className="aside-main-view">
      <div className="aside-main-view__inner">
        <Route path="/accounts" component={AccountsContainer} />
        <Route path="/deposits" component={DepositsContainer} />
      </div>
    </div>
  );
};

export default AsideMainView;
