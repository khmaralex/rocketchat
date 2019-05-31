import React from 'react';
import './AsidePopup.scss';
import AccountView from 'components/AccountView';
import { Route } from "react-router-dom";

export default function AsidePopup({history}){
  function goBack() {
    history.goBack();
  }
  
  return(
    <div className="aside-popup">
      <Route path="/accounts/:id" component={AccountView}/>
      <div className="aside-popup__close-btn" onClick={goBack}></div>
    </div>
  ) 
}