import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles'
import './scripts'
import IndexController from './controllers/IndexController'
import AboutController from './controllers/AboutController';
import CoordinatesController from './controllers/CoordinatesController';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
      <Route exact path="about" component={AboutController} />
      <Route exact path="coordinates" component={CoordinatesController} />
    </Switch>
  </BrowserRouter>
,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
