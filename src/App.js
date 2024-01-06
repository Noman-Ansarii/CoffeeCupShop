import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Coffee1 from './components/Coffee1';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Coffee1 />
        <About />
        <Cards />
        <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/coffee1" element={<Coffee1 />} />
          <Route exact path="/cards" element={<Cards />} />
          {/* <Route exact path="/footer" element={<Footer />} /> */}
        {/* </Routes> */}
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
