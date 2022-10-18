import React, {useState, useEffect} from 'react';
import MoodCard from './MoodCard';
import { Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';


function MoodGrid() {
  const [cards, setCards] = useState<React.ReactElement[]>([]);
  const [showForm, setShowForm] = useState(false)

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCards((old) => [...old, <Grid item><MoodCard title={e.target.mood.value}/></Grid>])
    setShowForm(false)
  }


  return (
    <>

      <Grid container spacing={3}>
        {cards}
      </Grid>

      {
        showForm && 
        <form onSubmit={handleSubmit} style={{position:'absolute', left:'30%', bottom:'50%'}}>
            Enter name of new mood-function:
            <input type={"text"} name={"mood"}/>
        </form> 
      }

      <IconButton aria-label="add" size="large" onClick={() => setShowForm(true)} sx={{position:'absolute', bottom:0, right:0, fontSize:"5rem", color:'#4CAF50'}}>
        <AddCircleIcon fontSize='inherit'/>
      </IconButton>

    </>
  );
}

export default MoodGrid;
