import React from "react";
import "./Contact.css";
import { FaGithub, FaPhoneAlt, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quos
          tempora magnam, beatae veritatis porro quo commodi rerum tenetur minus
          laudantium ipsum eveniet corporis aut nulla facilis quasi officiis
          reprehenderit!
        </p>
        <div className="contact-links">
          <a href="https://t.me/Xaydarovdev" target="_blank">
            <FaTelegram />
            @Xaydarovdev
          </a>
          <a href="+9989972528500" target="_blank">
            <FaPhoneAlt /> +998972528500
          </a>
        </div>
        <ul className="hero-links">
          <a href="https://t.me/Xaydarovdev" target="_blank">
            <FaTelegram />
          </a>
          <a href="https://github.com/BekzodXaydarov" target="_blank">
            <FaGithub />
          </a>
        </ul>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea
          name="name"
          id="id"
          placeholder="Enter your message"
          cols={"40"}
          rows={"10"}
        ></textarea>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default Contact;
