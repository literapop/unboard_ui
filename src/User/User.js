import React from 'react';
import Header from '../components/Header/Header';
import {Text, Box, Button, Container, Label, TextField, SelectList, Spinner} from 'gestalt';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './User.css';

const GET_USER = gql `
    {
      user {
        user(email: "brennan3@gmail.com") {
          id
          email
          firstName
          lastName
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



            <TextField
              id = "Email"
              // onChange={this.handleChange}
              placeholder="User Email"
              value = {
                data.user.email
              }
              type="text"
            />



          </Container>
        </>
      );
    }}

        
        </Query>

)
 

export default User;