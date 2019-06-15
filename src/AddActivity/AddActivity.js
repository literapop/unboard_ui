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

      const capoptions = [
        {
          value:1,
          Label:1
        },
        {
          value: 2,
          Label: 2
        },
        {
          value: 3,
          Label: 3
        },
        {
          value: 4,
          Label: 4
        },
        {
          value: 5,
          Label: 5
        },
        {
          value: 6,
          Label: 6
        },
        {
          value: 7,
          Label: 7
        },
        {
          value: 8,
          Label: "8+"
        }
      ];

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

            <SelectList
              id = "Activity"
              // onChange={this.handleChange}
              placeholder="How many people can participate"
              value={data.suggestion.participantCapacity}
              options={capoptions}
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