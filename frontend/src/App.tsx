import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MoodGrid from './components/MoodGrid';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [posCards, setPosCards] = useState(["Cheer", "Nod"])
  const [neuCards, setNeuCards] = useState(["Wave", "Thinking"])
  const [negCards, setNegCards] = useState(["ShakeHead"])
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [showFormDelete, setShowFormDelete] = useState(false)

  const handleSubmitAdd = (e: any) => {
    e.preventDefault();
    setShowFormAdd(false)
  }

  const handleSubmitDelete = (e: any) => {
    e.preventDefault();
    for (let i = 0; i < posCards.length; i++) {
      if (posCards[i] == e.target.mood.value) {
        if (e.target.sentiment.value == "Positive") {
          setPosCards( (arr) => {
            arr.splice(i, 1);
            return arr;
          });
        }
        else if (e.target.sentiment.value == "Neutral") {
          setNeuCards( (arr) => {
            arr.splice(i, 1);
            return arr;
          });
        }
        else if (e.target.sentiment.value == "Positive") {
          setNegCards( (arr) => {
            arr.splice(i, 1);
            return arr;
          });
        }
        break;
      }
    }
    setShowFormDelete(false)
  }

  return (
    <>
      <NavBar />
      <MoodGrid moodCards={posCards} color="#e7e6f7" />
      <MoodGrid moodCards={neuCards} color="#e3d0d8" />
      <MoodGrid moodCards={negCards} color="#aea3b0" />

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

export default App;
