import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({mobileNavClass}) => {
  return ( 
    <ul className={mobileNavClass}>
       <Link to="/shop">
          <li className="nav-links">Shop</li>
       </Link>
       <Link to="/about">
         <li className="nav-links">About</li>
      </Link>
      <Link to="/contact">
        <li className="nav-links">Contact</li>
        </Link>
      
    </ul>
   );
}
 
export default Navigation;