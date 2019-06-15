import React, { Component } from 'react';
import Header from './components/Header/Header';
import Login from './Login/Login';
import Home from './Home/Home';
import data from './data/data.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMobileNav: "hidden",  
      cards: []
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


  render() { 
    return ( 
      
    <>

       <Router>
        <Header 
          toggleMobileNav={this.toggleMobileNav} 
          mobileNavClass={this.state.showMobileNav}
          />   

        <Route exact path='/' component={Login} 
          />

        <Route path='/home' component={Home} />  


      </Router> 
     
      </>
     );
  }
}
 
export default App;