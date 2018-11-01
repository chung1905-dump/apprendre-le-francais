import React, {Component} from 'react';
import Lessons from "../data/lessons";

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
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            {level.title}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {level.lessons.map((lesson) => {
              return (
                <a key={lesson.id} className="dropdown-item" href={lesson.url}>{lesson.title}</a>
              );
            })}
          </div>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Lawless French</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {levelDropDown}
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#"><strong>Sign Up</strong></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><strong>Login</strong></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;