import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>
);

render(
  <Main>
    <p>ae</p>
  </Main>,
  document.getElementById('root'),
);
