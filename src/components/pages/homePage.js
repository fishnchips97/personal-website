import React from 'react';
import profile from '../../photos/profile.JPG'

function Homepage() {
  return (
    <div className="container-fluid">

      <h1>
        Erik Fisher
      </h1>

      <img src={profile} alt="Profile" className= "profile"/>

      <p>
        I am a UC Berkeley EECS grad who enjoys making projects with free time.<br/>
        Feel free to explore the projects tab to see some of my work.
      </p>

    </div>
  );
}

export default Homepage;
