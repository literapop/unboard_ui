import React from 'react';
import {Redirect} from 'react-router';
import './loginbuttons.css';

const LoginButton = ({redirect, loginUser}) => {
  return ( 
    
      redirect 
      ? <Redirect push to="./home" /> 
      :  <>
          
      <button
        type="submit"
        id="studentbutton"
        onClick={loginUser}
      >
        <span id="guest">
          <i className="fa fa-university" aria-hidden="true" />
        </span>
        <span className="buttontext">
          {
            'Continue As Student'
          }
        </span>
      </button>

      <button
        type="submit"
        id="guestbutton"
        onClick={loginUser}
      >
        <span id="guest">
          <i className="fa fa-question-circle" aria-hidden="true" />
        </span>
        <span className="buttontext">
          {'Continue As Guest'}
        </span>
      </button>
      

    </>
    
   );
}
 
export default LoginButton;
