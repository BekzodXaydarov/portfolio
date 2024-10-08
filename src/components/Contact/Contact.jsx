import React from "react";
import "./Contact.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BOT_TOKEN } from "../../utils";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=6900877326&text=${encodeURI(
        `ism:${data.name}\n\nemail:${data.email}\n\nhabar:${data.message}`
      )}`,
      {
        method: "GET",
      }
    )
      .then(() => {
        toast.success("Ma`lumotlar keldi")
        reset();
      })
      .catch((e) => console.log("Hato " + e));
  };
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
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </a>
        </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", {
            required: true,
          })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
          })}
        />
        <textarea
          name="name"
          id="id"
          placeholder="Enter your message"
          cols={"40"}
          rows={"10"}
          {...register("message", {
            required: true,
          })}
        ></textarea>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default Contact;
