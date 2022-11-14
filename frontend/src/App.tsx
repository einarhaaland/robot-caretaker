import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import AddMotion from './pages/AddMotion';
import Frontpage from './pages/FrontPage';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Frontpage/>} />
        <Route path='/add-motion' element={<AddMotion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
