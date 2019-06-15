import React from 'react';
// import LoginButtons from './loginbuttons';
import './Login.css';

const Login = () => (
  <div id="cover">
    <div id="logincard">
      <div>
        <div id="logo">UnBoard.Today</div>

        <div id="welcome">Welcome to UnBoard.today</div>
        <div id="subheader">Brought to you by your University</div>
        {/* <div id="gitsource">
          <a target="_blank" rel="noopener noreferrer">
            
          </a>
        </div> */}
      </div>
      <div>
        {/* <LoginButtons guest={() => {}} /> */}
      </div>
    </div>
  </div>
);

export default Login;