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
      <div style={{margin:50}}>
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
      </div>
    </>
  );
}

export default App;
