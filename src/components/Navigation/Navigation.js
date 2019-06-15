import React from 'react';
import {Icon} from 'gestalt';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({mobileNavClass}) => {
  return ( 
    < div className = {mobileNavClass} >

      <Link to="/user">
        Profile
      </Link>

      
    </div>
   );
}
 
export default Navigation;