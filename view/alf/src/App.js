import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContent from './components/HomeContent';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LearnContent from './components/LearnContent';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={HomeContent}/>
            <Route path="/listening/:name" component={LearnContent}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
