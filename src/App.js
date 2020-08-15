import React from 'react';
import {
  Router as Router,
  Route
} from 'react-router-dom';

// to solve stateless issue for server side rendering: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md


import { createMemoryHistory } from 'history';
// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Projects from './components/pages/projects'
import Resume from './components/pages/resume'

import './Assets/css/default.min.css'

const history = createMemoryHistory();


function App() {
  return (
    <Router history={history}>
    <div className="App">

      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Resume' component={Resume} />

      <Footer />


    </div>
    </Router>
  );
}

export default App;
