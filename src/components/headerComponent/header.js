import React from 'react';
import {
  Link
} from 'react-router-dom';


function Header() {
  return (
    <header>
      <div className="logo">
        EBF
      </div>

      <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Projects">Projects</Link>
            </li>

            <li className="last">
              <Link to="/Resume">Resume</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
