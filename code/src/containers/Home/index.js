import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import messaging from './firebase/init.js';
import Btn from '../firebase/fbbtn.js';
// import LoginFacebook from '../firebase/login_facebook.js';
// import LoginGoogle from '../firebase/login_google.js';

function Home() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me count + 1
      </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div><Btn /></div>
        
        
        
      </header>
    </div>
  );
}

export default Home;
