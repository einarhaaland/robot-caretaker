import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import MoodCard from './MoodCard';


function MoodGrid() {
  const [cards, setCards] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    //Cards can be fetched from your database here to keep custom cards when server resets
    setCards([
        <Grid item>
          <MoodCard title='Cheer'/>
        </Grid>,
        <Grid item >
          <MoodCard title='Nod'/>
        </Grid>,
        <Grid item>
          <MoodCard title='Wave'/>
        </Grid>,
        <Grid item>
          <MoodCard title='ShakeHead'/>
        </Grid>,
        <Grid item>
          <MoodCard title='Thinking'/>
        </Grid>
    ])
  }, []);


  return (
    <Grid container spacing={3}>
      {cards}
    </Grid>
  );
}

export default MoodGrid;
