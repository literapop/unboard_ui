import React from 'react';
import {Card, Text, Link, Box, Button, Container, Letterbox, Image, Label, TextField} from 'gestalt';
import Header from '../components/Header/Header';
import './AddActivity.css';


// const AddActivity = ({toggleMobileNav, mobileNavClass}) => {
//   return ( 
//     <>
//         <Header 
//             toggleMobileNav={toggleMobileNav} 
//             mobileNavClass={mobileNavClass}
//             />   

//        <input/>

//   </>
//   );
// }

class AddActivity extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this._handleChange.bind(this);
    this.state = {
      value: ""
    };
  }

  _handleChange({ value }) {
    this.setState({ value });
  }
  render() {
    return (
      <>
        <Header/>
          
        <Container>
            <Button text="Suggest Me Something"/>

        

        <Box>
          <Box marginBottom={2}>
            <Label htmlFor="text">
              <Text>Activit Title</Text>
            </Label>
          </Box>

          <TextField
            id="ActivityTitle"
            onChange={this.handleChange}
            placeholder="Activity Title"
            value={this.state.value}
            type="text"
          />
        </Box>

        </Container>
        
      </>
    );
  }
}
export default AddActivity;