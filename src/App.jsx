import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/title";
import Services from "./components/Services/Services";
import PortFolio from "./components/PortFolio/portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Hero />
        <About />
        <Title title={"my "} title2={"Services"} />
        <Services />
        <Title title={"Port"} title2={"folio"} />
        <PortFolio />
        <Title title={"Contact "} title2={"Me"} />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;

