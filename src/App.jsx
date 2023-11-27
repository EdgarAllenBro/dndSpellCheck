// import { useState } from 'react'
// import axios from 'axios'
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/login';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='home' element={<Home />} />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
