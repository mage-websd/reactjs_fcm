import React, { useState, useEffect } from 'react';
import LoginFacebook from './login_facebook.js';
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
        <LoginFacebook />
        
        
      </header>
    </div>
  );
}

export default Home;
