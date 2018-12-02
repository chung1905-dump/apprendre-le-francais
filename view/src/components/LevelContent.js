import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
        <div key={key}>
          <Link className="dropdown-item" to={`/lesson/${lesson._id}`}>{lesson.title}</Link>
        </div>
      );
    });

    return (
      <div className="row justify-content-md-center">
        {lessons}
      </div>
    );
  }
}

export default LevelContent;
