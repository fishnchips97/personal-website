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
import Pacr from './components/projects/pacr'
import Pacr_Privacy_Policy from './components/projects/support_docs/pacr_privacy_policy'
import Personal_Website from './components/projects/personal_website'


import './Assets/css/default.min.css'



function App() {
  return (

        <div className="App">

          <Header />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/projects/pacr' component={Pacr} />
              <Route exact path='/projects/pacr/privacy_policy' component={Pacr_Privacy_Policy} />
              <Route exact path='/projects/personal_website' component={Personal_Website} />
            </Switch>
          <Footer />


        </div>


  );
}

export default App;
