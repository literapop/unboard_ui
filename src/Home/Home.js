import React from 'react';
import Header from '../components/Header';
import CardGrid from '../components/CardGrid'
import Pills from '../components/Pills';
import './Home.css';

const Home = ({modal, toggleModal, cards}) => {
  return ( 
    <>
    <Header />   
    <Pills />
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