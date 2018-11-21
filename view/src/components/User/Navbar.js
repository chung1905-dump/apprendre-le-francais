import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: "",
      username: ''
    }
  }

  componentDidMount() {
    if (window.localStorage.getItem('auth')) {
      this.setState({
        isAuthenticated: true,
      })
    } else {
      this.setState({ isAuthenticated: false })
    }
  }
  render() {
    const { isAuthenticated } = this.state

    let content;
    if (isAuthenticated) {
      content = <ul className="navbar-nav ml-auto">
                  <li className="nav-item">Hello</li>
                </ul>
    } else {
      content = <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    {/* eslint-disable-next-line */}
                    <Link to="/user/signup" className="nav-link"><strong>Sign Up</strong></Link>
                  </li>
                  <li className="nav-item">
                    {/* eslint-disable-next-line */}
                    <Link to="/login" className="nav-link"><strong>Login</strong></Link>
                  </li>
                </ul>
    }

    return (
      <div>{content}</div>
    );
  }
}

export default Navbar;