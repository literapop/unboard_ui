import React from 'react';
import logo from '../../logo.svg';
import { SearchField } from 'gestalt';
// import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import 'gestalt/dist/gestalt.css';
import './Header.css';


const Header = ({toggleMobileNav, mobileNavClass}) => {

  return ( 
    <header className="navbar">

      <span className="navbar-toggle" onClick={toggleMobileNav}>
        <FaBars />
      </span> 

      <Link to="/Home"><img src={logo} alt="logo" width="50px" className="logo" /></Link>
      
      <SearchField placeholder="I'm bored" className="search-bar-nav"/>

      <Link to="AddActivity" mobileNavClass={mobileNavClass}>Add Activity</Link>

      {/* <Navigation mobileNavClass={mobileNavClass} /> */}

      < Link to = "/User" mobileNavClass={mobileNavClass} >Profile </Link>
  
    </header>
   );
}
 
export default Header;