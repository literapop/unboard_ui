import React from 'react';
import {Card, Text, Link, Box, Button, Container, Letterbox, Image, Label, TextField} from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header/Header';
import './AddActivity.css';

class AddActivity extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this._handleChange.bind(this);
    this.state = {
      value: "",
      cap: 2,
    };
  }

  _handleChange({ value }) {
    this.setState({
      title: value });
  }

 
  render() {
    <Query query={  gql`
        {activities {
          sponsored
          name
            description
          startTime
          endTime
          imageUrl
          link
          accessibility
          location {
            name
            address1
          }
              creator {
            firstName
            lastName
            email
            password
          }
          price
        }}
          `
        }>

    {({ loading, error, data }) => {
      if (loading) return <Spinner/>;
      if (error) return <p>Error :(</p>;

        
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
              value={this.state.title}
              type="text"
            />
          </Box>

          <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Activity Descriptions</Text>
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

          <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Participation Capacity</Text>
              </Label>
            </Box>

            <TextField
              id="ActivityTitle"
              onChange={this.handleChange}
              placeholder="How many people can participate"
              value={this.state.value}
              type="text"
            />
          </Box>

          <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Accessibile</Text>
              </Label>
            </Box>

            <TextField
              id="ActivityTitle"
              onChange={this.handleChange}
              placeholder="How"
              value={this.state.value}
              type="text"
            />
          </Box>

{/*           
          accessibility
          price
          imageUrl
          type {
            id
            name
          } */}

        </Container>
        
      </>
    );
  }
}
export default AddActivity;