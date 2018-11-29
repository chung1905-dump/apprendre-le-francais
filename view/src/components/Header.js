import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lessons from "../data/lessons";
import UserNavbar from './Header/Navbar';
import "../css/header.css"

class Header extends Component {
  // need sort by levels after reduce
  levels = Lessons.reduce(function (accumulator, currentValue) {
    let lesson = {
      title: currentValue.title,
      url: currentValue.url,
      id: currentValue.id
    };
    if (accumulator[currentValue.level] === undefined) {
      accumulator[currentValue.level] = {
        title: 'Level ' + currentValue.level,
        lessons: []
      };
    }
    accumulator[currentValue.level].lessons.push(lesson);
    return accumulator;
  }, []);

  render() {
    let levelDropDown = Object.keys(this.levels).map((key) => {
      let level = this.levels[key];
      return (
        <li key={key} className="nav-item dropdown">
          {/* eslint-disable-next-line */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            {level.title}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {level.lessons.map((lesson) => {
              return (
                <Link key={lesson.id} className="dropdown-item" to={`/listening/${lesson.url}`}>{lesson.title}</Link>
              );
            })}
          </div>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="jumbotron pt-0">
          <img src="https://www.lawlessfrench.com/wp-content/uploads/logo.png" alt="Lawless French" />
          <div className="site-description">Learn Frencais For The Future</div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" href="#">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {levelDropDown}
              </ul>
              <UserNavbar />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
