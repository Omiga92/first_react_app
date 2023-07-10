import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Components/Index";
import Navbar from "./Components/Navbar/index";
import Contact from "./Components/Contact/index";
import Footer from "./Components/Footer/index";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Index /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
