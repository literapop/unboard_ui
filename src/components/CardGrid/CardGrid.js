import React from 'react';
import Card from '../Card/Card'
import {Spinner, Modal, Box, Button} from 'gestalt';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
// import { updateLocale } from 'moment';

const DELETE_ACTIVITY =  gql`
  mutation deleteActivity($activityId: Int!, $userId: Int!) { deleteActivity(activityId: $activityId, userId: $userId) { id } }
`;

const CardFooter = ({ modal, toggleModal }) => (
  <>
    <center>
      <Button
        inline 
        accessibilityLabel="Register"
        size="sm"
        color="blue"
        text="Register"
      />
      <Mutation mutation={DELETE_ACTIVITY}>
        {(deleteActivity, refetchQuery ) => (
          <Button
            inline 
            accessibilityLabel="Like"
            size="sm"
            color="red"
            text="Delete Event!"
            onClick={e => {
              deleteActivity(
                { variables: 
                  { activityId: parseInt(modal.id),
                    userId: 1
                  }
                }
              ).then(() => toggleModal())
            }}
          />  
        )}
      </Mutation>  
    </center>
  </>
);

const CardGrid = ({modal, toggleModal, cards}) => (
  <>
  <Query query={
    gql`
        {activities {
    sponsored
    ads {
      images {
        href
      }
      name
      salePrice
      url
      
    }
    id
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
    views
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
      if (loading) return <Spinner show={true} accessibilityLabel="Activities are loading"  />;
      if (error) return <p>Error :(</p>;

      return data.activities.map(activity => (
        <Card
          key={activity.id}
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
      accessibilityModalLabel="View activity details"
      heading={modal.name}
      onDismiss={toggleModal}
      footer={<CardFooter modal={modal} toggleModal={toggleModal} />}
      size="sm"
    >
      <Box padding={2}>
        <img alt="descriptive" src={modal.imageUrl} width="400px" />
        {modal.description ? <p>{modal.description}</p> : ''}
        <p><b>When</b>: {Date(modal.startTime).slice(0,15)}</p>
        <p><b>Activity Type</b>: {modal.type ? modal.type.name : 'Mystery'}</p>
        <p><b>Location</b>: {modal.location ? modal.location.name : 'TBD'}</p>
        <p><b>Views</b>: {modal.views || 0 }</p>

        {modal.ads && modal.ads.length > 0
        ? <> 
        <br/>
        <hr/>
        <p><b>Sponsored Ad</b></p>
        {modal.ads.map((ad, i) => {
          if (ad.images && ad.images.length > 0) {
            return (
              <div style={{width: 100, float: "left", margin: 10}} key={i}>
                <a href={ad.url} target="_blank" rel="noopener noreferrer">
                  <div style={{height: 130}}>
                    <img src={ad.images[0].href} alt="advertisement" width="100px"/>
                  </div>
                  <p style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                    {ad.name}
                  </p>
                </a>
                <p>{`$${ad.salePrice}`}</p> 
              </div>
            );
          } else {
            return null;
          }
        })}
        
        </>
        : ''
        }
      </Box>
    </Modal>
  )}
</>
)
 
export default CardGrid;