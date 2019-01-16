import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLoginButton from './components/GoogleLoginButton';

class App extends Component {
  render() {
    return (
      <div className={"app"}>

        <GoogleLoginButton />
        <div className={"header"}>
          Wrote Note
        </div>

        <div className={"body"}>
        </div>

      </div>
    );
  }
}

export default App;
