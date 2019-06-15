import React from 'react';
import {Text, Link, Box, Button, Letterbox, Image} from 'gestalt';
import './Card.css';

const Card = ({id, imageUrl, activityName, activityDescription, startDate, location, type}) => {
  return ( 
    <div 
    className="card"
    key = {id}
    >
          <Letterbox width={250} height={250} contentAspectRatio={1}>
      <Image
        alt="tall"
        src={imageUrl.toString()}
        naturalWidth={1}
        naturalHeight={1}
      />
    </Letterbox>
    <Text align="center" bold size="xl">
      <Link to='/description'>
        <Box paddingX={0} paddingY={0}>
          {activityName}
        </Box>
      </Link>
      
    </Text>
    <p>Type of Activity: {type}</p>
      <p>{activityDescription}</p>
    <p>
      Start Date: {startDate}
    </p>
    <p>Location: {location}</p>
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
  </div>
   );
}
 
export default Card;