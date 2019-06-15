import React from 'react';
import LoginButtons from './loginbuttons';

const Modal = () => (
  <div id="cover">
    <div id="logincard">
      <div>
        <div id="logo"><i className="fa fa-pinterest" aria-hidden="true" /></div>
        <div id="welcome">Welcome to UnBoard.today</div>
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

export default Cover;