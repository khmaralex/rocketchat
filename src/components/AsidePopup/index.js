import React from 'react';
import './AsidePopup.scss';
import AccountViewContainer from 'containers/AccountViewContainer';
import { Route } from "react-router-dom";

const AsidePopup = ({ history }) => {
  function goBack() {
    history.goBack();
  }

  return (
    <div className="aside-popup">
      <Route path="/accounts/:id" component={AccountViewContainer} />
      <div className="aside-popup__close-btn" onClick={goBack} />
    </div>
  );
};

export default AsidePopup;