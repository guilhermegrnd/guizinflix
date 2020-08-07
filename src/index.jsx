import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Page404 from './pages/404';
import VideoAdd from './pages/Video';
import CategoryAdd from './pages/Category';
import Settings from './pages/Settings';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/video/add" component={VideoAdd} exact />
      <Route path="/category/add" component={CategoryAdd} exact />
      <Route path="/settings" component={Settings} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
