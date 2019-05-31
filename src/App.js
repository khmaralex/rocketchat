import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Accounts from "components/Accounts";
import AsidePopup from "components/AsidePopup";
import Deposits from "components/Deposits";
import Chat from "components/Chat";
import ChatPanel from "components/ChatPanel";
import AsideMainNav from "components/AsideMainNav";
import "./App.scss";



function App(props) {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/accounts" />} />

      <div className="app">
        <main className="main">
          <Chat />
          <ChatPanel />
        </main>

        <aside className="aside">
          <div className="aside-main">
            <AsideMainNav />

            <div className="aside-main-view">
              <div className="aside-main-view__inner">
                <Route path="/accounts" component={Accounts} />
                <Route path="/deposits" component={Deposits} />
              </div>
            </div>
          </div>

          <Route path="/(accounts|deposits)/:id" component={AsidePopup} />
        </aside>
      </div>
    </Router>
  );
}

export default App;
