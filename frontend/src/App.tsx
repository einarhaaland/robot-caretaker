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
      <div style={{margin:50}}>
        <MoodGrid moodCards={["Cheer", "Nod", "Wave", "ShakeHead", "Thinking"]} />
      </div>
    </>
  );
}

export default App;
