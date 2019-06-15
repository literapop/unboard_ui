import React from 'react';
import {Card, Text, Link, Box, Button, Letterbox, Image} from 'gestalt';

const CardGrid = ({cards}) => {
  return (  <>{ cards.map(card => {
    return (
      <Card 
          image={
            <Letterbox width={200} height={200} contentAspectRatio={1}>
            <Image
              alt="tall"
              src="https://source.unsplash.com/random"
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
                {card.activityType}
              </Box>
            </Link>
          </Text>
          <p>
            {card.date}
            
          </p>
          <p>Current participants: {card.participants}</p>
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
 
    )
   
  })}</> );
}
 
export default CardGrid;