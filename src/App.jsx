import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// routes - container for route definitions
// route - single route with path and component to render
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
