import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.scss";

function Accounts() {
  return (
    <div className="accounts">
      <div className="account">
        <div className="account-image" />

        <div className="account-info">
          <div className="account-info__number">Счёт № 57890456</div>
          <div className="account-info__balance">69 650 ₽</div>

          <div className="account-info__extra">
            8% годовых <br />
            Создан: 23 января 13:55 <br />
            Последнее операция: <br />
            8 марта 19:21 (+ 3500 ₽) <br />
          </div>
        </div>

        <Link className="account-disclousure-btn" to="/accounts/31234" />
      </div>
    </div>
  );
}

function Deposits() {
  return (
    <div className="deposits">
      <div className="deposit">
        <div className="deposit__name">Тусовочный</div>
        <div className="deposit__cashback">10 %</div>
        <div className="deposit__period">2 года</div>
      </div>
      <div className="deposit">
        <div className="deposit__name">Студенческий</div>
        <div className="deposit__cashback">2 %</div>
        <div className="deposit__period">2 года</div>
      </div>
    </div>
  );
}

function AccountView({ match, history}) {
  function goBack(params) {
    history.goBack();
  }

  return (
    <div className="account-view">
      <h3>ID: {match.params.id}</h3>
      <div className="account-view__close-btn" onClick={goBack}></div>
    </div>
  );
}

function App(props) {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/accounts" />} />

      <div className="app">
        <main className="main">
          <div className="chat">
            <div className="message message_client">
              <p className="message__author">Cережа</p>
              <div className="message__inner" />
            </div>
            <div className="message message_user" />
          </div>

          <div className="panel">
            <div className="panel-btns">
              <div className="panel-btns__item panel-btns__item_text">Aa</div>
              <div className="panel-btns__item panel-btns__item_stickers" />
              <div className="panel-btns__item panel-btns__item_pictures" />
              <div className="panel-btns__item panel-btns__item_docs" />
            </div>

            <div className="panel-message">
              <textarea
                className="panel-message__area"
                placeholder="Введите сообщение..."
              />

              <div className="panel-message__btn" />
            </div>
          </div>
        </main>

        <aside className="aside">
          <div className="aside-main">
            <nav>
              <ul>
                <li>
                  <Link to="/accounts">Счета</Link>
                </li>
                <li>
                  <Link to="/deposits">Вклады</Link>
                </li>
              </ul>
            </nav>

            <div className="aside-main-view">
              <div className="aside-main-view__inner">
                <Route path="/accounts" component={Accounts} />
                <Route path="/deposits" component={Deposits} />
              </div>
            </div>
          </div>

          <Route path="/accounts/:id" component={AccountView} />
        </aside>
      </div>
    </Router>
  );
}

export default App;
