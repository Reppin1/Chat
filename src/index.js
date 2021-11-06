import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import { Profile } from './MainChat/Profile/Profile';
import { Chat } from './MainChat/Chat/Chat';
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/main" component={Chat} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
