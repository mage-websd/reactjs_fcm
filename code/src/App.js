import React from 'react';
import logo from './logo.svg';
import './App.css';
// import messaging from './firebase/init.js';
import Btn from './component/btn.js';
import LoginFacebook from './firebase/login_facebook.js';
import LoginGoogle from './firebase/login_google.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Btn />
        <LoginFacebook />
        <div>
          <LoginGoogle />
        </div>
      </header>
    </div>
  );
}

export default App;
