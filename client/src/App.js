import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

export default function App() {

  return (
    <BrowserRouter>
      <section className='w-9/12 mx-auto'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

