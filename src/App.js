import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Projects from './components/pages/projects'
import Resume from './components/pages/resume'

import './Assets/css/default.min.css'

function App() {
  return (
    <Router>
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
