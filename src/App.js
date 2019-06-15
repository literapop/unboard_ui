import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './Login/Login';
import Home from './Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMobileNav: "hidden",  
     }
  }

  toggleMobileNav = () => {
    let css = (this.state.showMobileNav === "hidden") ? "active" : "hidden";
    this.setState({ 
      showMobileNav: css
    })
  } 

  render() { 
    return ( 
      
    <>

       <Router>
<<<<<<< HEAD
       <Header 
       toggleMobileNav={this.toggleMobileNav} 
       mobileNavClass={this.state.showMobileNav}
       />   
       <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />  
      {/* <Footer />  */}
      </Router> 
=======
        <Header 
          toggleMobileNav={this.toggleMobileNav} 
          mobileNavClass={this.state.showMobileNav}
          />   
          
          <Route exact path='/' component={Login} />  
          <Route path='/Home' component={Home} />
        <Footer /> 
      </Router>
>>>>>>> 32fd2f9c59ff39dde43577bb0f1e5c52e8c5dcd3
     
      </>
     );
  }
}
 
export default App;