import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <Link to="/user/signup" className="nav-link" href="#"><strong>Sign Up</strong></Link>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <a className="nav-link" href="#"><strong>Login</strong></a>
        </li>
      </ul>
    );
  }
}

export default Navbar;