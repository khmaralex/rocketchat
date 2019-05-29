import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <main className="main">
        <div className="chat">
          <div className="message message_client">
            <p className="message__author">Cережа</p>
            <div className="message__inner">

            </div>
          </div>
          <div className="message message_user">

          </div>
        </div>

        <div className="panel">
          <div className="panel-btns">
            <div className="panel-btns__item panel-btns__item_text" />
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
                <a href="/accounts">Счета</a>
                {/* <Link to="/accounts">Счета</Link> */}
              </li>
              <li>
                <a href="/accounts">Вклады</a>
                {/* <Link to="/deposits">Вклады</Link> */}
              </li>
            </ul>
          </nav>

          <div className="aside-main-view">
            <div className="aside-main-view__inner">
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

                  <div className="account-disclousure-btn" />
                </div>
              </div>

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
            </div>
          </div>
        </div>

        <div className="account-view" />
      </aside>
    </div>
  );
}

export default App;
