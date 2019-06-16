import React from 'react';
import Header from '../components/Header/Header';
import CardGrid from '../components/CardGrid/CardGrid'
import './Home.css';


const Home = ({modal, toggleModal, cards}) => {
  return ( 
    <>
    <Header />   
    
    <div id="columns">
      
     <CardGrid 
     cards={cards}
     toggleModal = {toggleModal}
     modal = {modal}/>
    </div>
  
  </>
  );
}
 
export default Home;