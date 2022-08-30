import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import FetchButton from './components/FetchButton';
import MoodCard from './components/MoodCard';
import NavBar from './components/Navbar';

function App() {

  useEffect(() => {
    console.log("TESTING BACKEND CONNECTION..")
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log("..DONE")
      })
  }, [])

  return (
    <>
      <NavBar />
      <FetchButton />
      <Grid container spacing={3}>
        <Grid item xs>
          <MoodCard title='Excited'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='Sad'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='Frustrated'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='Understanding'/>
        </Grid>
        <Grid item xs>
          <MoodCard title='ExcitedUnderstanding'/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
