import React from 'react';
import { Box, Button, Container,  TextField,  Spinner} from 'gestalt';
import { Mutation, withApollo } from 'react-apollo';
import { withRouter } from 'react-router';
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
 


const AddActivity = ({ client, newActivity, updateNewActivity, history }) => (
      <>
        <Header/>
        <Container>
          
          <Box >
            <h1>Activity Title</h1>

            <input
              autoFocus
              id="newName"
              key="newName"
              onChange={e => updateNewActivity({ name: e.target.value })}
              placeholder="Activity Title"
              value={newActivity.name}
              type="text"
            />
          </Box>

          <Box>
            <h2>Activity Type</h2>

            <input
              id="newType"
              key="newType"
              onChange={e => updateNewActivity({ type: e.value })}
              placeholder="Activity Title"
              value={newActivity.type}
              type="text"
            />
          </Box>

          <Box>
            <h2>Participation Capacity</h2>
           
            <input
              id="newPc"
              key="newPc"
              onChange={e => updateNewActivity({ participantCapacity: e.value })}
              placeholder="How many people can participate"
              value={newActivity.participantCapacity}
              type="text"
            />
          </Box>

          <Box>
            <h2>Price</h2>
           
            <input
              id="newPrice"
              key="newPrice"
              onChange={e => updateNewActivity({ price: e.value })}
              placeholder="Activity Title"
              value={newActivity.price}
              type="text"
            />
          </Box>

          <Button
          text="Suggest Me Something"
          onClick={
            () => (
              client.query({ query: GET_SUGGESTIONS, fetchPolicy: "network-only" }).then(({ data: { suggestion } }) => {
                window.suggestion = suggestion;
                console.log('hereeeeee', suggestion)
                updateNewActivity(Object.assign({}, suggestion, { type: suggestion.type.name }))
              })
            )
          }
          inline
          size="lg"

          />


          <Mutation mutation ={CREATE_ACTIVITY}>
            {
              (createActivity, ) => (
                <Button text = "Submit" onClick={e => {
                  console.log('fooooooo')
                  console.log(newActivity)
                  // e.preventDefault();
                  createActivity(
                    { variables: 
                      { accessibility: newActivity.accessibility,
                        creatorId: 1,
                        description: newActivity.name,
                        name: newActivity.name,
                        typeId: 5,
                        price: newActivity.price, 
                        participantCapacity: newActivity.participantCapacity
                      }
                    }
                  ).then(() => {
                    updateNewActivity({
                      name: '',
                      type: '',
                      participantCapacity: '0',
                      description: '',
                      accessibility: '',
                      price: ''
                    });
                    history.push("/home")
                  })
                }
              }
              inline 
              color="blue"
              size="lg"
              class="submitter"/>
              )
            }
          
          </Mutation>
        
          


          </Container>
        </>
);

export default withRouter(withApollo(AddActivity));