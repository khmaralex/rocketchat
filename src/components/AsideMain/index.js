import React from 'react';
import { Route } from "react-router-dom";
import AsideMainNav from "components/AsideMainNav";
import Accounts from "components/Accounts";
import Deposits from "components/Deposits";

const AsideMain = () => {
  return(
    <div className="aside-main">
      <AsideMainNav />

      <div className="aside-main-view">
        <div className="aside-main-view__inner">
          <Route path="/accounts" component={Accounts} />
          <Route path="/deposits" component={Deposits} />
        </div>
      </div>
    </div>
  );
}

export default AsideMain;