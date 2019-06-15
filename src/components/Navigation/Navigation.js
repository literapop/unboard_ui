import React from 'react';
import {Icon} from 'gestalt';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({mobileNavClass}) => {
  return ( 
    <ul className={mobileNavClass}>
       <Link to="/shop">
          <li className="nav-links">Home</li>
       </Link>
       <Link to="/about">
         <li className="nav-links">Interests</li>
      </Link>
      <Link to="/contact">
        <Icon icon="person" accessibilityLabel="Person" color="darkGray" /> User
        </Link>
        <Link to="/contact">
        <Icon icon="calendar" accessibilityLabel="Calendar" color="darkGray" /> My Events
        </Link>
      
    </ul>
   );
}
 
export default Navigation;