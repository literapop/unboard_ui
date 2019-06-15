import React from 'react';
// import {Card, Text, Link, Box, Button, Letterbox, Image} from 'gestalt';
import Header from '../components/Header/Header';
import './User.css';


const User = ({toggleMobileNav, mobileNavClass}) => {
  return ( 
    <>
        <Header 
            toggleMobileNav={toggleMobileNav} 
            mobileNavClass={mobileNavClass}
            />   

       <h1>Profile</h1>

  </>
  );
}
 
export default User;