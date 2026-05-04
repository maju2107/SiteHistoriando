import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SideNavigationBar from './SideNavigationBar';
import PageChegadaPortugueses from './pages/PageChegadaPortugueses';
import Home from './pages/Home';

function App() {
  
  return (
  
    <>
      <SideNavigationBar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chegadaPortuguesesBrasil" element={<PageChegadaPortugueses/>}/>
        </Routes>
     
    </>


  )
}

export default App;
