import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from 'react-router';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';

import './App.css';

class UnBoardUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Header />
      <Router>
        <Route />
        <Route />
      </Router>
      <Footer />
     );
  }
}
 
export default UnBoardUI;