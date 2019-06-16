import React from 'react';
import Header from '../components/Header';
import CardGrid from '../components/CardGrid'
import Pills from '../components/Pills';
import './Home.css';

const Home = ({cards, filterTypeId, modal, onPillClick, toggleModal}) => {
  return ( 
    <>
    <Header />   
    <Pills onPillClick={onPillClick}/>
    <div id="columns">  
      <CardGrid 
        cards={cards}
        toggleModal={toggleModal}
        modal={modal}
        filterTypeId={filterTypeId}
      />
    </div>
  </>
  );
}
 
export default Home;