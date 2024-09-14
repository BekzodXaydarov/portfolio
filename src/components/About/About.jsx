import React from "react";
import "./About.css";
import Title from "../Title/title";

const About = () => {
  return (
    <div id="about" className="about">
      <img src="/avatar.jpg" alt="" className="about-img" />
      <div className="about-info">
      <Title title={"About"} title2={"me"} />
        <h1>Full Stack Developer!</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          aliquid quam accusantium blanditiis asperiores, quo recusandae sint
          aspernatur consequatur ipsam dignissimos, ad incidunt labore impedit
          doloremque. Dolorem culpa quibusdam maiores? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Saepe aliquid quam accusantium
          blanditiis asperiores, quo recusandae sint aspernatur consequatur
          ipsam dignissimos, ad incidunt labore impedit doloremque. Dolorem
          culpa quibusdam maiores? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Saepe aliquid quam accusantium blanditiis
          asperiores, quo recusandae sint aspernatur consequatur ipsam
          dignissimos, ad incidunt labore impedit doloremque. Dolorem culpa
          quibusdam maiores?
        </p>
      </div>
    </div>
  );
};

export default About;
