import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={"app"}>
        <div className={"header"}>
          Wrote Note
        </div>

        <div className={"body"}>
          Login with <a href="" target="_blank" rel="noopener noreferrer">Google</a>
        </div>

      </div>
    );
  }
}

export default App;
