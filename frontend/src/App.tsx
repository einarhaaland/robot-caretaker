import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
      kult
    </div>
  );
}

export default App;
