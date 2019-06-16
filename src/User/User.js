import React from 'react';
import Header from '../components/Header/Header';
// import {Text, Box, Button, Container, Label, TextField, SelectList, Spinner} from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './User.css';

const GET_USER = gql `
    {
      query {
        user(email: "brennen3@gmail.com") {
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
      // if (loading) return <Spinner/>;
      if (error) return <p>Error :(</p>;

    
      return (
        <>
        
          <Header/>

          <h1>Hello User</h1>

        </>
      );
    }}

        
        </Query>

)
 

export default User;