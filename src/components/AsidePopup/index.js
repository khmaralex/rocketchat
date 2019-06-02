import React from 'react';
import { Route } from "react-router-dom";
import AccountViewContainer from 'containers/AccountViewContainer';
import './AsidePopup.scss';

const AsidePopup = ({ history, match }) => {
  const goBack = () => history.push(`/${match.params[0]}`);

  return (
    <div className="aside-popup">
      <Route path="/accounts/:id" component={AccountViewContainer} />
      <div className="aside-popup__close-btn" onClick={goBack} />
    </div>
  );
};

export default AsidePopup;