import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Button} from 'gestalt';
import 'gestalt/dist/gestalt.css';

const Header = ({toggleMobileNav}) => ( 
  <header className="navbar">
    <span className="navbar-toggle" onClick={toggleMobileNav}>
      <FaBars />
    </span> 

    <Link to="/Home"><img src={logo} alt="logo" width="50px" className="logo" /></Link>

    <Link to="AddActivity" style={{ textDecoration: 'none' }}>
      {/* <Icon icon="add" accessibilityLabel="add" color="darkGray" /> */}
      <Button text="Add Activity" type="button" />
    </Link>

    {/* <Navigation mobileNavClass={mobileNavClass} /> */}

    < Link to = "/User" style={{ textDecoration: 'none' } }><Button text="Profile" type="button" /> </Link>
  </header>
);
 
export default Header;