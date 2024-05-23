import React from 'react'
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './Components/Form/Signup';
import Login from './Components/Form/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
