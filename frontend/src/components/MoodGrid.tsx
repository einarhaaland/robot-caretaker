import React from 'react';
import { Grid } from '@mui/material';
import MoodCard from './MoodCard';


function MoodGrid() {
    return (
        <Grid container spacing={3}>
          <Grid item>
            <MoodCard title='Cheer'/>
          </Grid>
          <Grid item>
            <MoodCard title='Nod'/>
          </Grid>
          <Grid item>
            <MoodCard title='Wave'/>
          </Grid>
          <Grid item>
            <MoodCard title='ShakeHead'/>
          </Grid>
          <Grid item>
            <MoodCard title='Thinking'/>
          </Grid>
        </Grid>
    );
}

export default MoodGrid;
