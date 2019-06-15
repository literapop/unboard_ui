import React from 'react';
import Header from '../components/Header/Header';
import CardGrid from '../components/CardGrid/CardGrid'
import './Home.css';


const Home = ({toggleMobileNav, mobileNavClass, cards}) => {
  return ( 
    <>
    <Header 
    toggleMobileNav={toggleMobileNav} 
    mobileNavClass={mobileNavClass}
    />   <div className="card-list">
     <CardGrid cards={cards}/>
    </div>
  
  </>
  );
}
 
export default Home;