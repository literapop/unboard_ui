import React, { Component } from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import AddActivity from './AddActivity/AddActivity';
import User from './User/User';
import data from './data/data.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      redirect: false,
      showMobileNav: "hidden",
      user: {
        email: '',
        firstName: '',
        events: []
      },
      isLoggedIn: false, 
      modal: null
     }
    
  }

  componentDidMount() {
    this.setState({
      cards: [...data]
    }, 
    () => {
      this.setState({
        filteredCards: this.state.cards
      }
      )
    })
  }

  toggleMobileNav = () => {
    let css = (this.state.showMobileNav === "hidden") ? "active" : "hidden";
    this.setState({ 
      showMobileNav: css
    })
  } 

  loginUser = () => {
    this.setState({redirect:true})
  }

  toggleModal = (obj) => {
    this.state.modal 
    ? (this.setState({modal: null})) 
    : (this.setState({modal: obj}))
  }
 

  render() { 
    return ( 
      
    <>

      <Router>
        <Route exact path='/' component={ () =>
          <Login 
            isLoggedIn={this.state.isLoggedIn} 
            redirect = {this.state.redirect} 
            loginUser = {this.loginUser}/>
          } />

        <Route path='/AddActivity' component={() => 
          <AddActivity
            toggleMobileNav={this.toggleMobileNav} 
            mobileNavClass={this.mobileNavClass}
            />} />  
        
        <Route path='/user' component={() => 
          <User
            toggleMobileNav={this.toggleMobileNav} 
            mobileNavClass={this.mobileNavClass}
            />} />  
          
        <Route path='/home' component={() => 
          <Home 
            modal = {this.state.modal}
            toggleModal={this.toggleModal}
            toggleMobileNav={this.toggleMobileNav} 
            mobileNavClass={this.mobileNavClass}
            cards = {this.state.cards}/>} />  
        
      </Router> 
     
      </>
     );
  }
}
 
export default App;