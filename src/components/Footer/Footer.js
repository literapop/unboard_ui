import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( 
       <div className="footer-container">
        <div className="footer-column">
           <h1>UnBoardMe!</h1> 

        </div>
        <div className="footer-column">
        <ul>
            <li>Home</li>
            <li>Interests</li>
            <li>User</li>
            <li>Events</li>
        </ul>
        </div>

       </div> 
     );
}
 
export default Footer;