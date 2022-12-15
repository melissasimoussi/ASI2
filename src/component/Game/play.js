import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Navigation } from '../Navigation/navigation';
import { CardBoard } from './CardBoard';
import { Grid, Segment } from 'semantic-ui-react';
import { CardFull } from './CardFull';

            
            

export const Play = (props)=>{
    

    return (
      <><Navigation>

      </Navigation>
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
        <Grid.Column>

          <Segment></Segment>

        </Grid.Column>

        <Grid.Column>
          <Grid divided='horizontally'>
            <Grid.Row rows={2}>
            
        <Segment>
           <CardBoard>
           </CardBoard>
        </Segment>
            </Grid.Row>
            <Grid.Row>

        <Segment>
           <CardBoard>
           </CardBoard>
        </Segment>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column>
          <Grid divided='horizontally'>
            <Grid.Row rows={2}>
            
        <Segment>
           <CardFull>
           </CardFull>
        </Segment>
            </Grid.Row>
            <Grid.Row>

        <Segment>
           <CardFull>
           </CardFull>
        </Segment>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        </Grid.Row>
      </Grid>
    
      </>
       
              );
            }
    