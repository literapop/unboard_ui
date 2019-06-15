import React from 'react';
import {Card, Text, Link, Box, Button, Letterbox, Image} from 'gestalt';
import Header from '../components/Header/Header';
import './AddActivity.css';


const AddActivity = ({toggleMobileNav, mobileNavClass}) => {
  return ( 
    <>
        <Header 
            toggleMobileNav={toggleMobileNav} 
            mobileNavClass={mobileNavClass}
            />   

       <input/>

  </>
  );
}
 
export default AddActivity;