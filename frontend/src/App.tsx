import React, { useEffect } from 'react';
import './App.css';
import FetchButton from './components/FetchButton';

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
    <FetchButton />
  );
}

export default App;
