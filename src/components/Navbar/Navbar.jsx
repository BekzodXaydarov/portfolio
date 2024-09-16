import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [bars, setBars] = useState(false);
  const handleBars = (bool) => setBars(bool);
  return (
    <nav>
      <h1 className="nav-logo">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="link"
        >
          PortFolio
        </Link>
      </h1>
      <ul className={`link-wrapper ${bars ? "active" : ""}`}>
        <Link
          to="hero"
          smooth={true}
          offset={0}
          duration={500}
          className="link"
          onClick={() => handleBars(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={0}
          duration={500}
          className="link"
          onClick={() => handleBars(false)}
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          offset={0}
          duration={500}
          className="link"
          onClick={() => handleBars(false)}
        >
          Service
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          offset={0}
          duration={500}
          className="link"
          onClick={() => handleBars(false)}
        >
          Poftfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
          className="link"
          onClick={() => handleBars(false)}
        >
          Contact
        </Link>
      </ul>
      <button className="bars" onClick={() => handleBars(!bars)}>
        {bars ? <FaX /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
