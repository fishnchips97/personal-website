import React from 'react';
import {
  Link
} from 'react-router-dom';

function Projects() {
  return (
    <div className="container-fluid">

      <h1>
        Projects
      </h1>

      <ul>
        <li>React Website with servere side rendering</li>

        <li>Swift UI Application: Pacr <br/> <Link to="/projects/pacr">Pacr</Link></li>
      </ul>

    </div>
  );
}

export default Projects;
