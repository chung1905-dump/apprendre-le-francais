import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContent from './components/HomeContent';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <HomeContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
