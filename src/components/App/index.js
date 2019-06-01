import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Chat from "components/Chat";
import ChatPanelContainer from "containers/ChatPanelContainer";
import AsideMain from 'components/AsideMain';
import AsidePopup from "components/AsidePopup";
import "./App.scss";

const App = () => {
  const redirectToAccounts = () => <Redirect to="/accounts" />;

  return (
    <Router>
      <Route exact path="/" render={redirectToAccounts} />

      <div className="app">
        <main className="main">
          <Chat />
          <ChatPanelContainer />
        </main>

        <aside className="aside">
          <AsideMain/>
          <Route path="/(accounts|deposits)/:id" component={AsidePopup} />
        </aside>
      </div>
    </Router>
  );
}

export default App;
