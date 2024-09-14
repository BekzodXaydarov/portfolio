import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default App;
