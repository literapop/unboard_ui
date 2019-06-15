import React from 'react';
import {Text, Box, Button, Container, Label, TextField, SelectList, Spinner} from 'gestalt';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header/Header';
import './AddActivity.css';


const GET_SUGGESTIONS = gql `
    {suggestion {
      name
      participantCapacity
      accessibility
      price
      imageUrl
      type {
        id
        name
      }
    }
    }
  `;
    

  const CREATE_ACTIVITY = gql`
  mutation CreateActivity(
    $accessibility: Float!, 
    $price: Float!, 
    $creatorId: Int!, 
    $description: String!, 
    $name:String!, 
    $startTime: Int, 
    $endTime: Int, 
    $typeId: Int!, 
    $locationId: Int, 
    $participantCapacity: Int) {
  createActivity(
    accessibility: $accessibility, 
    price: $price, 
    creatorId: $creatorId, 
    description: $description, 
    name:$name, 
    startTime: $startTime, 
    endTime: $endTime, 
    typeId: $typeId, 
    locationId: $locationId, 
    participantCapacity: $participantCapacity) {    
      id
      participantCapacity
      startTime
      endTime
      type {
          id
        name
      }
      location {
        name
        address1
      }
  }
}
`;
 


const AddActivity = () => (


  < Query query = {GET_SUGGESTIONS} >
  

      {
        ({
          loading,
          error,
          data,
          refetch
        }) => {
      if (loading) return <Spinner/>;
      if (error) return <p>Error :(</p>;

    
      return (
        <>
        
        <Header/>
          
        <Container>
          
          <Box >
            < Box marginBottom = {
              2
            }
            class = "title" >
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
            < Box marginBottom = {
              2
            }
            class = "title" >
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
            < Box marginBottom = {
              2
            }
            class = "title" >
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
            < Box marginBottom = {
              2
            }
            class = "title" >
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

          < Button
          text = "Suggest Me Something"
          onClick = {
            () => {
              refetch();
            }
          }
          />


          <Mutation mutation ={CREATE_ACTIVITY}>
            {
              (createActivity, ) => (
                <Button text = "Submit" onClick={e => {
                  console.log(data)
                  // e.preventDefault();
                  createActivity(
                    { variables: 
                      { accessibility: data.suggestion.accessibility,
                        creatorId: 1,
                        description: data.suggestion.name,
                        name: data.suggestion.name,
                        typeId: 5,
                        price: data.suggestion.price, 
                        participantCapacity: data.suggestion.participantCapacity
                      }
                    }
                  )
                }
              }/>  
              )
            }
          
          </Mutation>
        
          


          </Container>
          </>
      );
    }}

        
        </Query>

)
 

export default AddActivity;