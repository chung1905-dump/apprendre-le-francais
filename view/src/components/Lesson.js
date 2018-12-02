import React, { Component } from 'react';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio_path: "",
      userAnswer: '',
      point: '...',
      correctAns: "",
      point: ""
    }
  }

  updateUserAns = (e) => {
    this.setState({
      userAnswer: e.target.value
    });
  }

  // noinspection JSMethodCanBeStatic
  lcss = (X, Y) => {
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

  checkAnswer = () => {
    let maxPoint = 10,
      point,
      userAnswer = this.parseStr(this.state.userAnswer),
      correctAnswer = this.parseStr(this.state.correctAns);
      
      console.log(this.state.correctAns)
      
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
    // console.log(correctAnswer.length)
    point = Math.round(point * 100) / 100;

    this.setState({point: point + '/' + maxPoint});
    // console.log(this.state.point)
  };

  parseStr = (str) => {
    str = str.replace(/\r?\n|\r/g, ' ');
    str = str.toLowerCase().replace(/[^a-z\s]+/g, '');
    str = str.split(' ');
    str = str.filter(s => s.replace(/[^a-z]+/g, '').length > 0);
    // console.log(str);
    return str;
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`/lesson/${id}`)
      .then(res => {
        res.json()
          .then(data => {
            console.log(data.script);
            this.setState({ 
              audio_path: data.audio_path,
              correctAns: data.script
            })
          })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div>
            <audio
              controls
              src="/media/examples/t-rex-roar.mp3">
            </audio>
            <div className="mt-3">
              <div className="form-group">
                <label>Answer</label>
                <textarea className="form-control" rows={5} id="answer" value={this.state.userAnswer}
                  onChange={e => this.updateUserAns(e)} />
              </div>
            </div>
            <button onClick={this.checkAnswer} type="button" className="btn btn-success">Submit</button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.state.fixAns }}>
          </div>
          <div>
            <span>Your point: {this.state.point}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson;