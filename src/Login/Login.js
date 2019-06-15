import React from 'react';
import logo from '.././logo.png'
import LoginButtons from './loginbuttons';
import './Login.css';

const Login = () => (
  <div id="cover">
    <div id="logincard">
      <div>
        <div id="logo"><img src={logo} alt="logo"/></div>

        <div id="welcome">Welcome to UnBoard.Today</div>
        <div id="subheader">Brought to you by your University</div>
        {/* <div id="gitsource">
          <a target="_blank" rel="noopener noreferrer">
            
          </a>
        </div> */}
      </div>
      <div>
        <LoginButtons guest={() => {}} />
      </div>
    </div>
  </div>
);

export default Login;