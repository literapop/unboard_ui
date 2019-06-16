import React from 'react';
import Header from '../components/Header/Header';
import {Text, Box, Button, Container, Label, TextField, SelectList, Spinner} from 'gestalt';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './User.css';

const GET_USER = gql `
    {
      query activities {
        activities(creatorId: 1) {
          sponsored
          name
          description
          startTime
          endTime
          imageUrl
          link
          accessibility
          likeCount
          ads {
            images {
              href
            }
            name
            salePrice
            url
          }
          participantCapacity
          registeredParticipants {
            id
            email
            firstName
            lastName
          }
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
          views
        }
      }
    }
  `;


const User = () => (


  < Query query = {GET_USER} >
  

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

            {
              data.activities.name
            }



          </Container>
        </>
      );
    }}

        
        </Query>

)
 

export default User;