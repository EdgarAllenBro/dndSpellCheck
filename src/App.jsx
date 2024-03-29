// import { useState } from 'react'
// import axios from 'axios'
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/login';
import Home from './components/Home'
import MySpells from './components/mySpells';
import SpellBook from './components/spellBook'
import SpellDetails from './components/spellDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './spells.css'

function App() {

  

  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='home' element={<Home />} />
        <Route path='mySpells' element={<MySpells />}/>
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />}/>
        <Route path='spellBook' element={<SpellBook/>}/>
        <Route path='spellDetails' element={<SpellDetails/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
