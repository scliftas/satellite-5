import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './pages/home';
import './styles/tailwind.css';

ReactDom.render(
  (
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={Home} />
    </Router>
  ),
  document.getElementById('app'),
);
