// import { useState } from 'react'
// import axios from 'axios'
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
