import { useState } from 'react'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  

  return (
    <>
      <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
         <Route path="/contact" exact element={<Contact/>} />
        </Routes>
       <Footer />
        
      </Router>
      
      </div>
    </>
  )
}

export default App
