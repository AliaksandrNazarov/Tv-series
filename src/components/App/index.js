import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Tv Series list</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
       
        <Series />
      </div>
    );
  }
}

export default App;
