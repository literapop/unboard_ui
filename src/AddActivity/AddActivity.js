import React from 'react';
import {Text, Box, Button, Container, Label, TextField, SelectList, Spinner} from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header/Header';
import './AddActivity.css';

const AddActivity = () => (

  <Query query={  gql`
        {suggestion {
          name
          participantCapacity
          accessibility
          price
          imageUrl
          type {
            id
            name
          }}
          }`}> 

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
                <Text>Activity Title</Text>
              </Label>
            </Box>

            <TextField
              id = "Activity"
              // onChange={this.handleChange}
              placeholder="Activity Title"
              value={data.suggestion.name}
              type="text"
            />
          </Box>

          <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Activity Type</Text>
              </Label>
            </Box>

            <TextField
              id = "Activity"
              // onChange={this.handleChange}
              placeholder="Activity Title"
              value={data.suggestion.type.name}
              type="text"
            />
          </Box>

          <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Participation Capacity</Text>
              </Label>
            </Box>

            < TextField
              id = "Activity"
              // onChange={this.handleChange}
              placeholder="How many people can participate"
              value={data.suggestion.participantCapacity}
              type="text"
            />
          </Box>

          <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Price</Text>
              </Label>
            </Box>

            <TextField
              id = "Activity"
              // onChange={this.handleChange}
              placeholder="Activity Title"
              value={data.suggestion.price}
              type="text"
            />
          </Box>

          {/* <Box>
            <Box marginBottom={2}>
              <Label htmlFor="text">
                <Text>Accessibile</Text>
              </Label>
            </Box>

            <TextField
              id = "Activity"
              // onChange={this.handleChange}
              placeholder="How"
              value={data.suggestion.accessibility}
              type="text"
            />
          </Box> */}

          < Button text = "Submit" />


          </Container>
          </>
      );
    }}

        
        </Query>

)
 

export default AddActivity;