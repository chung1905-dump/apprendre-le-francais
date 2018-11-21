import React, {Component} from 'react';
import Lessons from "../data/lessons";
import Answers from "../data/answers";
import "../css/learn-content.css"

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
    let maxOccurs = 0,
      table = {},
      firstOccurOnY = 0,
      firstOccurOnX = 0;

    for (let i = 0; i <= X.length; i++) {
      for (let j = 0; j <= Y.length; j++) {
        if (table[i] === undefined) {
          table[i] = {};
        }
        if (i === 0 || j === 0)
          table[i][j] = 0;
        else if (X[i - 1] === Y[j - 1]) {
          table[i][j] = table[i - 1][j - 1] + 1;
          if (table[i][j] > maxOccurs) {
            maxOccurs = table[i][j];
            firstOccurOnY = j - maxOccurs;
            firstOccurOnX = i - maxOccurs;
          }
        } else {
          table[i][j] = 0;
        }
      }
    }

    return {
      maxOccurs,
      firstOccurOnY,
      firstOccurOnX
    };
  };


  checkAnswer() {
    let maxPoint = 10,
      point,
      userAnswer = this.parseStr(this.state.userAnswer),
      correctAnswer = this.parseStr(this.question.correctAns);

    let result = this.lcss(userAnswer, correctAnswer);

    {
      let mo = result.maxOccurs,
        foU = result.firstOccurOnX,
        foA = result.firstOccurOnY;
      let a = [], b = [], c = [], d = [], e = [];

      for (let i = 0; i < foU; i++) {
        a.push(userAnswer[i]);
      }
      for (let i = 0; i < foA; i++) {
        b.push(correctAnswer[i]);
      }
      for (let i = foA; i < foA + mo; i++) {
        c.push(correctAnswer[i]);
      }
      for (let i = foU + mo; i < userAnswer.length; i++) {
        d.push(userAnswer[i]);
      }
      for (let i = foA + mo; i < correctAnswer.length; i++) {
        e.push(correctAnswer[i]);
      }

      let html = '';
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);
      html += ' <span class="wrong">' + a.join(' ') + ' </span>';
      html += ' <span class="fixed">' + b.join(' ') + '</span>';
      html += ' <span class="correct">' + c.join(' ') + '</span>';
      html += ' <span class="wrong">' + d.join(' ') + '</span>';
      html += ' <span class="fixed">' + e.join(' ') + '</span>';
      this.setState({
        fixAns: html
      });
    }

    point = result.maxOccurs;
    point = point / correctAnswer.length * maxPoint;
    point = Math.round(point * 100) / 100;

    this.setState({point: point + '/' + maxPoint});
  };

  parseStr(str) {
    str = str.replace(/\r?\n|\r/g, ' ');
    str = str.toLowerCase().replace(/[^a-z\s]+/g, '');
    str = str.split(' ');
    str = str.filter(s => s.replace(/[^a-z]+/g, '').length > 0);
    console.log(str);
    return str;
  }

  render() {
    this.question = this.prepareData();
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
          <div dangerouslySetInnerHTML={{__html: this.state.fixAns}}>
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
