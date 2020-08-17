import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();
const prevHistoryPush = customHistory.push;
let lastLocation = customHistory.location;

customHistory.listen(location => {
  lastLocation = location;
});
customHistory.push = (pathname, state = {}) => {
  console.log(pathname)
  if (
    lastLocation === null ||
    pathname !==
      lastLocation.pathname + lastLocation.search + lastLocation.hash ||
    JSON.stringify(state) !== JSON.stringify(lastLocation.state)
  ) {
    prevHistoryPush(pathname, state);
  }
};


hydrate(
  <Router history={customHistory}>
  <App />
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
