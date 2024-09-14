import React from "react";
import "./Services.css";
import { services } from "../../utils";



const Services = () => {
  return <div id="sevices" className={`services ${services.length > 2 ? "services-grid":"services-flex"}`}>
    {services.map((item,index)=>(
        <div key={index} className="service">
            {<item.icon />}
            <h1 className="service-title">{item.title}</h1>
            <p className="service-description">{item.description}</p>
            <button>Read More</button>
        </div>
    ))}
  </div>;
};

export default Services;
