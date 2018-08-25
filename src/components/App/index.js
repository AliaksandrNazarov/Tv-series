import React, { Component } from 'react';

import './App.css';
// import Series from '../../containers/Series'
import Main from '../Main'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Tv Series list</h1>
        </header>       
        <Main />
      </div>
    );
  }
}

export default App;
