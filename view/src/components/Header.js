import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserNavbar from './Header/Navbar';
import "../css/header.css"

class Header extends Component {
  constructor() {
    super();
    // fetch('/levels', {
    //   method: "GET",
    // }).then(res => {
    //   res.json().then((lessons) => {
    //     console.log(lessons);
    //     for (let i in lessons) {
    //     }
    //   });
    // }).catch(err => console.log(err));
  }

  render() {
    let levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    let levelDropDown = Object.keys(levels).map((key) => {
      return (
        <li key={key} className="nav-item dropdown">
          <Link className="dropdown-item" to={`/level/${levels[key]}`}>Level {levels[key]}</Link>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="jumbotron pt-0">
          <img src="https://www.lawlessfrench.com/wp-content/uploads/logo.png" alt="Lawless French"/>
          <div className="site-description">Learn Frencais For The Future</div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" href="#">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {levelDropDown}
              </ul>
              <UserNavbar/>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
