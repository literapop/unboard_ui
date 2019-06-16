import React from 'react';
import Header from '../components/Header/Header';
import CardGrid from '../components/CardGrid/CardGrid'
import './Home.css';


const Home = ({modal, toggleModal, toggleMobileNav, mobileNavClass, cards}) => {
  return ( 
    <>
    <Header 
    
    toggleMobileNav={toggleMobileNav} 
    mobileNavClass={mobileNavClass}
    />   <div className="card-list">
      
     <CardGrid 
     cards={cards}
     toggleModal = {toggleModal}
     modal = {modal}/>
    </div>
  
  </>
  );
}
 
export default Home;