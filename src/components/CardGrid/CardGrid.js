import React from 'react';
import Card from '../Card/Card'
import {Spinner, Modal, Heading, Box, Button} from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CardGrid = ({modal, toggleModal, cards}) => (
  <>
  <Query query={
    gql`
        {activities {
    sponsored
    name
      description
    startTime
    endTime
    imageUrl
    link
    type {
      name
    }
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
    {({ loading, error, data, refetch }) => {
      if (loading) return <Spinner/>;
      if (error) return <p>Error :(</p>;

      return data.activities.map(activity => (
        <Card 
          activity = {activity}
          toggleModal = {toggleModal}
          modal = {modal}
          id = {activity.id}
          imageUrl={`https://img.imgeng.in/${activity.imageUrl}`}
          activityName={activity.name}
          type={activity.type ? activity.type.name : 'Mystery'}
          activityDescription={activity.description}
          startDate={Date(activity.startTime).slice(0,15)}
          location={activity.location ? activity.location.name : "TBD"}/>

          
      ), () => refetch());
    }}

  </Query>
    {modal && (
            <Modal
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              heading={modal.name}
              onDismiss={toggleModal}
              footer={<>
              <Button
                  inline 
                  accessibilityLabel="Register"
                  size="sm"
                  color="blue"
                  text="Register"
                />
                <Button
                inline 
                  accessibilityLabel="Like"
                  size="sm"
                  color="red"
                  text="Delete Event!"
                /> 
                  
                </>
              }
              size="sm"
            >
              <Box padding={2}>
                <Heading size="sm">{modal.description}</Heading>
              </Box>
            </Modal>
          )}
</>
)
 
export default CardGrid;