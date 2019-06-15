import React from 'react';
import Card from '../Card/Card'
import {Spinner} from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CardGrid = ({cards}) => (

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
    {({ loading, error, data }) => {
      if (loading) return <Spinner/>;
      if (error) return <p>Error :(</p>;

      return data.activities.map(activity => (
        <Card 
          id = {activity.id}
          imageUrl={`https://img.imgeng.in/${activity.imageUrl}`}
          activityName={activity.name}
          // type={activity.type.name}
          activityDescription={activity.description}
          startDate={Date(activity.startTime).slice(0,15)}
          location={activity.location.name}
          />
      ));
    }}
  </Query>


)
 
export default CardGrid;