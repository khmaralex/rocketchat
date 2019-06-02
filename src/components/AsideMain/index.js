import React from "react";
import AsideMainNav from "components/AsideMainNav";
import AsideMainView from "components/AsideMainView";
import "./AsideMain.scss";

const AsideMain = () => {
  return (
    <div className="aside-main">
      <AsideMainNav />
      <AsideMainView />
    </div>
  );
};

export default AsideMain;
