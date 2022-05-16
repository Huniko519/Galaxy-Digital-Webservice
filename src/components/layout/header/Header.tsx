import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../pages/index.scss";

import Logo from "../../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  const user_menu = [
    {
      content: "Services",
    },
    {
      content: "Solutions",
    },
    {
      content: "Recent Projects",
    },
    {
      content: "Contact Us",
    },
  ];

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 992
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      setMobileView(false); // This worked for me
    };
  });

  const renderUserToggle = () => <GiHamburgerMenu />;

  const renderUserMenu = (item, index) => (
    <a
      href={
        index === 0
          ? "/#services"
          : index === 1
          ? "/#solutions"
          : index === 2
          ? "/details"
          : "#contactus"
      }
      key={index}
    >
      <div className="notification">
        <span>{item.content}</span>
      </div>
    </a>
  );

  return (
    <div className="llc-header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" width="150px" height="150px" />
        </Link>
      </div>
      <div>
        <h2>LongLife Coin</h2>
      </div>
    </div>
  );
};

export default Header;
