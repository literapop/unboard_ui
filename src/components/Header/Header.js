import React from 'react';
<<<<<<< HEAD
import logo from '../../logo.svg';
=======
import logo from '../../logo.png';
import { SearchField } from 'gestalt';
>>>>>>> c3a5c2145b6df06b451d63c30a735b86547cf340
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