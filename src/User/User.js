import React from 'react';
import Header from '../components/Header/Header';
import {
  Container,
  Box,
  Card,
  Avatar,
  Link,
  Text
} from 'gestalt';
import CardGrid from '../components/CardGrid/CardGrid'
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
import '../Home/Home.css';


const User = ({
    modal,
    toggleModal,
    cards
  }) => (
<>
 <Header/>
 < Container>
    <Box maxWidth={400} padding={2} column={5}>
        <Card
          image={
            <Avatar
              name="James Jones"
              src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-boy-casual-220453.jpg&fm=jpg"
            />
          }>
          <Text align="center" bold size="xl">
            < Link href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
              <Box paddingX={3} paddingY={2}>
                James Jones
              </Box>
            </Link>
          </Text>
          
        </Card>
    </Box>
    
    <h1>Activities</h1>   

  
  <div className="card-list">
      
     <CardGrid 
     cards={cards}
     toggleModal = {toggleModal}
     modal = {modal}/>
    </div>
  

  </Container>
</>
)
 

export default User;