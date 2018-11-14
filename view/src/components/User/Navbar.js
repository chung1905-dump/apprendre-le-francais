import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <Link to="/user/signup" className="nav-link"><strong>Sign Up</strong></Link>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <Link to="/login" className="nav-link"><strong>Login</strong></Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;