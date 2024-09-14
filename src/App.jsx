import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/title";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Hero />
        <About />
        <Title title={"my "} title2={"Services"} />
      </div>
    </>
  );
};

export default App;
