import React from 'react';
import {Icon} from 'gestalt';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({mobileNavClass}) => {
  return ( 
    < div className = {mobileNavClass} >

       <Link to="/shop">
          <div className = "nav-links" > Home </div>
       </Link>

       <Link to="/about">
         <div className="nav-links">Interests</div>
      </Link>
      
      <Link to="/contact">
        <Icon icon="person" accessibilityLabel="Person" color="darkGray" /> User
      </Link>

      <Link to="/contact">
        <Icon icon="calendar" accessibilityLabel="Calendar" color="darkGray" /> My Events
      </Link>
      
    </div>
   );
}
 
export default Navigation;