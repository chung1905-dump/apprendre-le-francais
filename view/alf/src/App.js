import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContent from './components/HomeContent';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    let levels = ["A1","A2","B1","B2"]
    return (
      <div className="App">
        <Header levels={levels}/>
        <HomeContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
