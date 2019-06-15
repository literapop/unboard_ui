import React from 'react';
import {Redirect} from 'react-router';
import './loginbuttons.css';


class LoginButtons extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
      }
    }

    handleGuest = () => { 
      this.setState({redirect:true})
    }

    render() {
      if (this.state.redirect) {
        return <Redirect push to="./Home" /> ;
      }

      return (
        <React.Fragment>
          
          <button
            type="submit"
            id="studentbutton"
            onClick={this.handleGuest}
          >
            <span id="guest">
              <i className="fa fa-question-circle" aria-hidden="true" />
            </span>
            <span className="buttontext">
              {
                'Continue As Student'
              }
            </span>
          </button>

          <button
            type="submit"
            id="guestbutton"
            onClick={this.handleGuest}
          >
            <span id="guest">
              <i className="fa fa-question-circle" aria-hidden="true" />
            </span>
            <span className="buttontext">
              {'Continue As Guest'}
            </span>
          </button>
          

        </React.Fragment>
      );
    }

}

export default LoginButtons;
