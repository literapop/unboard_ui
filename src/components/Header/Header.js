import React from 'react';
import logo from '../../logo.svg';
import { SearchField } from 'gestalt';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Button, Icon} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './Header.css';


const Header = ({toggleMobileNav, mobileNavClass}) => {

  return ( 
    <header className="navbar">

      <span className="navbar-toggle" onClick={toggleMobileNav}>
        <FaBars />
      </span> 

      <Link to="/Home"><img src={logo} alt="logo" width="50px" className="logo" /></Link>
      
      <SearchField placeholder="What do you want to do?" className="search-bar-nav"/>

      <Link to="AddActivity" mobileNavClass={mobileNavClass} style={{ textDecoration: 'none' }}>
        {/* <Icon icon="add" accessibilityLabel="add" color="darkGray" /> */}
        <Button text="Add Activity" type="button" />
      </Link>

      {/* <Navigation mobileNavClass={mobileNavClass} /> */}

      < Link to = "/User" mobileNavClass={mobileNavClass} style={{ textDecoration: 'none' } }><Button text="Profile" type="button" /> </Link>
  
    </header>
   );
}
 
export default Header;