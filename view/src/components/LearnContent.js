import React, {Component} from 'react';
import Lessons from "../data/lessons";
import Answers from "../data/answers";

class LearnContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: '',
      point: '...'
    };
    this.question = this.prepareData();
  }

  prepareData() {
    const name = this.props.match.params.name;
    let result = Lessons.filter(obj => {
      return obj.url === name
    });
    let ans = Answers.filter(a => {
      return a.id === result[0].id;
    });
    result[0].correctAns = ans[0].answer;
    return result[0];
  }

  updateUserAns(e) {
    this.setState({
      userAnswer: e.target.value
    });
  }

  // noinspection JSMethodCanBeStatic
  lcss(X, Y) {
    let result = 0,
      table = {};

    for (let i = 0; i <= X.length; i++) {
      for (let j = 0; j <= Y.length; j++) {
        if (table[i] === undefined) {
          table[i] = {};
        }
        if (i === 0 || j === 0)
          table[i][j] = 0;
        else if (X[i - 1] === Y[j - 1]) {
          table[i][j] = table[i - 1][j - 1] + 1;
          result = Math.max(result, table[i][j]);
        } else {
          table[i][j] = Math.max(table[i - 1][j] || 0, table[i][j - 1] || 0);
        }
      }
    }

    return result;
  };

  checkAnswer() {
    let maxPoint = 10,
      point,
      userAnswer = this.parseStr(this.state.userAnswer),
      correctAnswer = this.parseStr(this.question.correctAns);

    point = this.lcss(userAnswer, correctAnswer);

    maxPoint = correctAnswer.length;

    this.setState({point: point + '/' + maxPoint});

    // console.log(userAnswer);
    // console.log(correctAnswer);
    // console.log(point);
  };

  parseStr(str) {
    // console.log(str);
    str = str.toLowerCase().replace(/[^a-z\s]+/g, '');
    // console.log(str);
    str = str.split(' ');
    // console.log(str);
    str = str.filter(s => s.replace(/[^a-z]+/g, '').length > 0);
    // console.log(str);
    return str;
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div>
            <div className="embed-responsive embed-responsive-16by9 border border-dark rounded">
              <iframe title={this.question.title.title} className="embed-responsive-item"
                      src={this.question.youtube_url}/>
            </div>
            <div className="mt-3">
              <div className="form-group">
                <label>Answer</label>
                <textarea className="form-control" rows={5} id="answer" value={this.state.userAnswer}
                          onChange={e => this.updateUserAns(e)}/>
              </div>
            </div>
            <button onClick={this.checkAnswer.bind(this)} type="button" className="btn btn-success">Submit</button>
          </div>
          <div>
            <span>Your point: {this.state.point}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnContent;
