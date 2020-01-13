import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/main';

ReactDom.render(
    (<Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={Main} />
    </Router>),
    document.getElementById('app')
);
