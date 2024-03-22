import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Login from './pages/Login';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/login" element={<Login/>} /> */}
          <Route  path="/signup" element={<Signup/>} />
          <Route  path="/" element={<Netflix/>} />
          <Route  path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
