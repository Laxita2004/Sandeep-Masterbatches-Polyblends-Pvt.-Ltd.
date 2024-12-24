import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import LandingPage from "./LandingPage";

import ColorMasterbatch from "./ColorMasterbatch";
import AdditiveMasterbatch from "./AdditiveMasterbatch";
import FillersCompounds from "./FillersCompounds";
import PolymerBlendsAlloys from "./PolymerBlendsAlloys";
import GreenZone from "./GreenZone";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/Home" element={ <Home /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Product" element={ <Product /> } />
        <Route path="/Contact" element={ <Contact /> } />

        <Route path="/Product/ColorMasterbatch" element={ <ColorMasterbatch /> } />
        <Route path="/Product/AdditiveMasterbatch" element={ <AdditiveMasterbatch /> } />
        <Route path="/Product/FillersCompounds" element={ <FillersCompounds /> } />
        <Route path="/Product/PolymerBlendsAlloys" element={ <PolymerBlendsAlloys /> } />
        <Route path="/Product/GreenZone" element={ <GreenZone /> } />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
