import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../css/level-content.css"

class LevelContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: {},
      currentLevel: this.props.match.params.level
    };
  }

  prepareData(level) {
    if (!this.state.levels[level]) {
      fetch('/level/' + level, {
        method: "GET",
      }).then(res => res.json().then(this.onGetLessonsSuccess.bind(this))
      ).catch(err => console.log(err));
    }
  }

  onGetLessonsSuccess(res) {
    this.setState({
      levels: Object.assign(
        this.state.levels,
        {[this.props.match.params.level]: res}
      )
    });
  }

  render() {
    let currentLevel = this.props.match.params.level;
    this.prepareData(currentLevel);
    if (this.state.levels[currentLevel] === undefined) {
      return (
        <div className="row justify-content-md-center">
          <span>Loading</span>
        </div>
      );
    }
    let lessons = Object.keys(this.state.levels[currentLevel]).map((key) => {
      let lesson = this.state.levels[currentLevel][key];
      return (
        <div key={key} className="jumbotron div-lesson">
          <Link className="lesson-title" to={`/lesson/${lesson._id}`}>
            <h1><i class="fas fa-headphones-alt"></i> {lesson.title}</h1>
          </Link>
          <p className="lesson-author">Uploaded by {lesson.user}</p>
          <p className="lesson-level">Level {lesson.level}</p>
        </div>
      );
    });

    return (
      <div className="container lessons-container">
        {lessons}
      </div>
    );
  }
}

export default LevelContent;
