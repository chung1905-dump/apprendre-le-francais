import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      username: ''
    };

    fetch('/authenticate', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
      body: JSON.stringify({ token: this.getToken() })
    }).then(res => res.json().then(this.onSuccess.bind(this)))
      .catch(err => console.log(err));
  }

  onSuccess = function (body) {
    this.setState({
      isLoggedIn: true,
      username: body.username
    });
  };

  getToken = function () {
    //@todo: Get token here
    console.log(localStorage.getItem('alf_user_token'))
    return localStorage.getItem('alf_user_token');
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span className="nav-link"><strong>Hello {this.state.username}</strong></span>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link"><strong>Logout</strong></Link>
          </li>
        </ul>
      );
    }
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/user/signup" className="nav-link"><strong>Sign Up</strong></Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link"><strong>Login</strong></Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
