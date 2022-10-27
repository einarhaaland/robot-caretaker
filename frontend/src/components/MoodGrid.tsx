import React, {useState, useEffect} from 'react';
import MoodCard from './MoodCard';
import { Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';


interface GridProps {
  moodCards: string[],
  color: string
}


function MoodGrid(props: GridProps) {
  const [cards, setCards] = useState<React.ReactElement[]>([]);
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [showFormDelete, setShowFormDelete] = useState(false)


  useEffect(() => {
    //Cards can be fetched from your database here to keep custom cards when server resets
    for (let i = 0; i < props.moodCards.length; i++) {
      setCards((oldArray) => [...oldArray, <Grid item><MoodCard title={props.moodCards[i]}/></Grid>])
    }
  }, []);

  const handleSubmitAdd = (e: any) => {
    e.preventDefault();
    setCards((old) => [...old, <Grid item><MoodCard title={e.target.mood.value}/></Grid>])
    setShowFormAdd(false)
  }

  const handleSubmitDelete = (e: any) => {
    e.preventDefault();
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].props.children.props.title == e.target.mood.value) {
        setCards( (arr) => {
          arr.splice(i, 1);
          return arr;
        });
        break;
      }
    }
    setShowFormDelete(false)
  }


  return (
    <>

      <Grid container xs={4} spacing={3} style={{backgroundColor: props.color, margin: "0px", display: "inline-flex", height: "100vh"}}>
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
