import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

// to solve stateless issue for server side rendering: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md


// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Projects from './components/pages/projects'
import Resume from './components/pages/resume'


import './Assets/css/default.min.css'



function App() {
  return (

        <div className="App">

          <Header />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Projects' component={Projects} />
              <Route exact path='/Resume' component={Resume} />
            </Switch>
          <Footer />


        </div>


  );
}

export default App;
