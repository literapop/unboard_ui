import React from 'react';
import {Card, Text, Link, Box, Button, Letterbox, Image, Spinner} from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

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
          image={
            <Letterbox width={200} height={200} contentAspectRatio={1}>
            <Image
              alt="tall"
              src={activity.imageUrl}
              naturalWidth={1}
              naturalHeight={1}
            />
          </Letterbox>
          }
          // onMouseEnter={this.handleMouseEnter}
          // onMouseLeave={this.handleMouseLeave}
          >
          <Text align="center" bold size="xl">
            <Link href="https://pinterest.com">
              <Box paddingX={1} paddingY={1}>
                {activity.name}
              </Box>
            </Link>
            <p>{activity.description}</p>
          </Text>
          <p>
            Start Time: {Date(activity.startTime)}
            
          </p>
          <p>Location: {activity.location.name}</p>
          <Button
          inline 
            accessibilityLabel="Follow James Jones"
            size="sm"
            color="red"
            text="Like"
          />
            <Button
            inline 
            accessibilityLabel="Follow James Jones"
            size="sm"
            color="blue"
            text="Add Event"
          />
        </Card>
      ));
    }}
  </Query>


)
 
export default CardGrid;