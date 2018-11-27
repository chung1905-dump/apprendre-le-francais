import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import LearnContent from './components/LearnContent';
import SignUp from './components/User/SignUp';
import Login from './components/User/Login';
import Upload from './components/User/Upload';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={HomeContent}/>
          <Route path="/listening/:name" component={LearnContent}/>
          <Route path="/user/signup" component={SignUp}/>
          <Route path="/user/login" component={Login}/>
          <Route path="/user/upload" component={Upload}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
