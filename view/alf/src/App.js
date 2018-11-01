import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContent from './components/HomeContent';
import Header from './components/Header';
import Footer from './components/Footer';
import Lessons from './data/lessons';

class App extends Component {
  levels = Lessons.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue.level) === -1) {
      accumulator.push(currentValue.level);
    }
    return accumulator;
  }, []);

  render() {
    return (
      <div className="App">
        <Header levels={this.levels}/>
        <HomeContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
