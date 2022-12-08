import React, { useState } from 'react';
import { User } from '../User/containers/User';
import { Grid, Segment,Container } from 'semantic-ui-react';
import { User } from '../User/containers/User';

export const Navigation = (props)=>{
    const [currentUser,setCurrentUser]= useState({
        img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
        login:"TOTO",
        pwd:"oui",
        money:1000,
    
    });
    return (
<Container>
    <Grid divided='vertically'>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>
          <User 
                 id={currentUser.id}
                  login={currentUser.login}
                  pwd={currentUser.pwd}
                  money={currentUser.money}
                  img={currentUser.img}
                  display_type='MONEY'>
          </User>
          </Segment>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>
          <User id={currentUser.id}
                  surname={currentUser.surname}
                  lastname={currentUser.lastname}
                  login={currentUser.login}
                  pwd={currentUser.pwd}
                  money={currentUser.money}
                  img={currentUser.img}
                  display_type='SHORT'>
          </User>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>


    );
}