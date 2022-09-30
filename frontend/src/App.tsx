import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import FetchButton from './components/FetchButton';
import MoodCard from './components/MoodCard';
import NavBar from './components/Navbar';

function App() {

  useEffect(() => {
    console.log("TESTING BACKEND CONNECTION..")
    fetch("http://localhost:5000/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log("..DONE")
      })
  }, [])

  return (
    <>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs>
          <MoodCard title='Cheer'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='Nod'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='Wave'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='ShakeHead'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='Thinking'/>
        </Grid>
      </Grid>
      <FetchButton />
    </>
  );
}

export default App;
