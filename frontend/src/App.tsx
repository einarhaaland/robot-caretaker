import React, { useEffect } from 'react';
import './App.css';
import FetchButton from './components/FetchButton';
import MoodCard from './components/MoodCard';

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
      <FetchButton />
      <MoodCard title='Excited'/>
      <MoodCard title='Sad'/>
      <MoodCard title='Frustrated'/>
      <MoodCard title='Understanding'/>
      <MoodCard title='ExcitedUnderstanding'/>
    </>
  );
}

export default App;
