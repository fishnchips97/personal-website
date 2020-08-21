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
        <li>Swift UI Application: Pacr<br/><Link to="/projects/pacr">Pacr</Link></li>

        <li>Server Side Rendered React Website<br/> <Link to="/projects/personal_website">Personal Website</Link></li>
      </ul>

    </div>
  );
}

export default Projects;
