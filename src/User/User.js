import React from 'react';
import Header from '../components/Header';
import {
  Container,
  Box,
  Card,
  Avatar,
  Link,
  Text
} from 'gestalt';
import CardGrid from '../components/CardGrid'
import '../Home/Home.css';

const User = ({
    modal,
    toggleModal,
    cards
  }) => (
<>
  <Header/>
  <Container>
    <div className="profileName">
      <Box column={3}>
        <Card
          image={
            <Avatar
              name="James Jones"
              src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-boy-casual-220453.jpg&fm=jpg"
              verified
            />
          }>
          <Text align="center" bold size="xl">
            <Link href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Box paddingX={3} paddingY={2}>
                James Jones
              </Box>
            </Link>
          </Text>
        </Card>
      </Box>
    </div>
    
    <h2>My Registered Activities</h2>   
    <div id="columns">  
      <CardGrid 
        cards={cards}
        toggleModal={toggleModal}
        modal={modal}
      />
    </div>  
  </Container>
</>);

export default User;