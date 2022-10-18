import React, {useState, useEffect} from 'react';
import MoodCard from './MoodCard';
import { Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';


function MoodGrid() {
  const [cards, setCards] = useState<React.ReactElement[]>([]);
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [showFormDelete, setShowFormDelete] = useState(false)


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

  const handleSubmitAdd = (e: any) => {
    e.preventDefault();
    setCards((old) => [...old, <Grid item><MoodCard title={e.target.mood.value}/></Grid>])
    setShowFormAdd(false)
  }

  const handleSubmitDelete = (e: any) => {
    e.preventDefault();
    for (const card in cards) {
      //if card.child.props.title == e.target.mood.value remove card from list
    }
    //setCards((old) => [...old, <Grid item><MoodCard title={e.target.mood.value}/></Grid>])
    setShowFormAdd(false)
  }


  return (
    <>

      <Grid container spacing={3}>
        {cards}
      </Grid>

      {
        showFormAdd && 
        <form onSubmit={handleSubmitAdd} style={{position:'absolute', left:'30%', bottom:'50%'}}>
            Enter name of new mood-function:
            <input type={"text"} name={"mood"}/>
        </form> 
      }
      {
        showFormDelete && 
        <form onSubmit={handleSubmitDelete} style={{position:'absolute', left:'30%', bottom:'50%'}}>
            Enter name of mood-function to delete:
            <input type={"text"} name={"mood"}/>
        </form> 
      }

      <IconButton aria-label="add" size="large" onClick={() => setShowFormAdd(true)} sx={{position:'absolute', bottom:0, right:100, fontSize:"5rem", color:'#4CAF50'}}>
        <AddCircleIcon fontSize='inherit'/>
      </IconButton>

      <IconButton aria-label="add" size="large" onClick={() => setShowFormDelete(true)} sx={{position:'absolute', bottom:0, right:0, fontSize:"5rem", color:'#e41b36'}}>
        <DeleteIcon fontSize='inherit'/>
      </IconButton>

    </>
  );
}

export default MoodGrid;
