import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MoodGrid from './components/MoodGrid';

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
      <MoodGrid moodCards={["Cheer", "Nod"]} color="#e7e6f7" />
      <MoodGrid moodCards={["Wave", "Thinking"]} color="#e3d0d8" />
      <MoodGrid moodCards={["ShakeHead"]} color="#aea3b0" />
    </>
  );
}

export default App;
