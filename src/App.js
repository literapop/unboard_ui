import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from '.components/Login/Login';
import Home from '.components/Home/Home'
import Router from 'react-router';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <>
      <Header />
      <Login />
      <Home />
      // <Router>
      //   <Route />
      //   <Route />
      // </Router>
      <Footer />
      </>
     );
  }
}
 
export default APp;