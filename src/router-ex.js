import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Home2() {
  return (
    <div>
      <h2>Home2</h2>
    </div>
  );
}


function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home2} />
          <Route path="/topics" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
