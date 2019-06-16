import React from 'react';
import {Spinner, Modal, Box, Button} from 'gestalt';
import { Query, Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
// import { updateLocale } from 'moment';

const DELETE_ACTIVITY =  gql`
  mutation deleteActivity($activityId: Int!, $userId: Int!) { deleteActivity(activityId: $activityId, userId: $userId) { id } }
`;

const GET_TYPES = gql `
 {
  types {
    name
    id
  }
}
`;

const Pills = ({ client, modal, toggleModal }) => (
  <center>
    <Query query={GET_TYPES}>
    {
      ({
        loading,
        error,
        data,
        refetch
        }) => {
        if (loading) return <Spinner show={true} accessibilityLabel="Loading..." />;
        if (error) return <p>Error :(</p>;
          console.log('data: ', data);
          return data.types.map(({ id, name }) => (<button key={id}>{name}</button>));
          }
        }
    </Query>
  </center>
);
 
export default withApollo(Pills);