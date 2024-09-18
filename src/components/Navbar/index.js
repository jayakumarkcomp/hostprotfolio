import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navcontainer">
        <div className="navlogo">
          JK
        </div>
        <div>
          <ul className="navlist">
            <li className="navitem">
              <Link to="/" className="Link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="Link">
                About
              </Link>
            </li>
            <li className="navitem">
              <Link to="/timeline" className="Link">
                Timeline
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;