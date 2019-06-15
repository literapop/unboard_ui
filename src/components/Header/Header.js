import React from 'react';
import logo from '../../logo.svg';
import { SearchField } from 'gestalt';
import Navigation from '../Navigation/Navigation';
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
  <Link to="/"><img src={logo} alt="logo" width="50px" className="logo" /></Link>
  <SearchField />
  <Navigation mobileNavClass={mobileNavClass} />
  
</header>
   );
}
 
export default Header;