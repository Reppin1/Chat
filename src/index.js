import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Profile } from './MainChat/Profile/Profile';
import { Chat } from './MainChat/Chat/Chat';
import { store } from './redux/store';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/main" component={Chat} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
