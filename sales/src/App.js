import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenBags from "./components/MenBags";
import WomenBags from "./components/WomenBags";
import KidsBags from './components/KidsBags';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    
      <div className='monitor'>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menbags" element={<MenBags/>} />
        <Route path="/womenbags" element={<WomenBags/>} />
        <Route path="/kidsbags" element={<KidsBags/>} />

        </Routes>
      </div>
    
  );
}

export default App;