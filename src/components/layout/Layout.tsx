import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Input from "react-phone-number-input/input";

import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoFacebook,
} from "react-icons/io";

import "./layout.scss";
import StyledInput from "../../components/input/Input";
import Textarea from "../textarea/Textarea";
import { Phone, Mail, Address, Apartment } from "../../components/icons/Icons";
import Routes from "../Routes";

const Layout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleContact = async () => {
    if (name.trim() === "") {
      toast.warning("empty username. Try again!");
      return;
    } else if (email.trim() === "") {
      toast.warning("empty email. Try again!");
      return;
    } else if (phone.trim() === "") {
      toast.warning("empty phone. Try again!");
      return;
    } else if (title.trim() === "") {
      toast.warning("empty subject. Try again!");
      return;
    } else if (details.trim() === "") {
      toast.warning("empty detail descriptions. Try again!");
      return;
    } else {
      let contactInfo = {
        name: name,
        email: email,
        phone: phone,
        subject: title,
        details: details,
      };
    }
  };

  return (
    <BrowserRouter>
      <Route
        render={(props: any) => (
          <div className="layout">
            <div className="content">
              <Routes />
            </div>
          </div>
        )}
      />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default Layout;
