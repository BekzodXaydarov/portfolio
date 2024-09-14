import React from "react";
import "./portfolio.css";
import { portfolio } from "../../utils";

const PortFolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {portfolio.map((item, index) => (
        <a key={index} className="portfolio-card" href={item.link} target="_blank">
          <h1 className="portfolio-card-title"> {item.title} </h1>
          <img src={item.img} alt="" />
        </a>
      ))}
    </div>
  );
};

export default PortFolio;
