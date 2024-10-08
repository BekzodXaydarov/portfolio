import React from "react";
import "./Hero.css";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Texnologies } from "../../utils";


const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src="/avatar.jpg" alt="" className="profile" />
      <div className="hero-info">
        <h2>Salom men</h2>
        <h1>Xaydarov Bekzod</h1>
        <h2>
          Va Men{" "}
          <ReactTyped
            strings={Texnologies}
            typeSpeed={60}
            backSpeed={60}
            loop
          >
            <input type="text" />
          </ReactTyped>
        </h2>
        <ul className="hero-links">
            <a href="https://t.me/Xaydarovdev" target="_blank">
              <FaTelegram />
            </a>
            <a href="https://github.com/BekzodXaydarov" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
        </ul>
        <a className="hero-btn" href="/cv.pdf" download>Dowloand CV</a>
      </div>
        <img src="/avatar.jpg" alt="" className="hero-img" />
    </div>
  );
};

export default Hero;
