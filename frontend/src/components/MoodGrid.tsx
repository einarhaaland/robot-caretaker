import React, {useState, useEffect} from 'react';
import MoodCard from './MoodCard';
import { Grid } from '@mui/material';


interface GridProps {
  moodCards: string[],
  color: string
}


function MoodGrid(props: GridProps) {
  const [cards, setCards] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    //setCards([]);
    for (let i = 0; i < props.moodCards.length; i++) {
      setCards((oldArray) => [...oldArray, <Grid item><MoodCard title={props.moodCards[i]}/></Grid>])
    }
  }, []);

  return (
    <>
      <Grid container xs={4} spacing={3} style={{backgroundColor: props.color, margin: "0px", display: "inline-flex", height: "100vh"}}>
        {cards}
      </Grid>
    </>
  );
}

export default MoodGrid;
