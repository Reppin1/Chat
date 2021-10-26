import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Profile } from "./MainChat/Profile/Profile";
import { Chat } from "./MainChat/Chat/Chat";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={ App } exact />
        <Route path="/main" component={ Chat } exact />
        <Route path="/profile" component={ Profile } />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
