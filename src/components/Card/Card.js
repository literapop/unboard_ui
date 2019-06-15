import React from 'react';
import {Text, Link, Box, Button, Letterbox, Image} from 'gestalt';
import './Card.css';

const Card = ({id, imageUrl, activityName, activityDescription, startTime, location}) => {
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
      <Link href="https://pinterest.com">
        <Box paddingX={0} paddingY={0}>
          {activityName}
        </Box>
      </Link>
      <p>{activityDescription}</p>
    </Text>
    <p>
      Start Time: {startTime}
      
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