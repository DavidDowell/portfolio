import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillXDiamondFill } from "react-icons/bs";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section>
      <ul className="flex flex-col">
        <li
          className={`cursor-pointer m-2 ${activeLink === "home" ? "active" : ""}`}
          onClick={() => handleClick("home")}
        >
          <Link to="/" smooth={true} duration={2000}>
            {activeLink === "home" ? <BsFillXDiamondFill /> : "Home"}
          </Link>
        </li>
        <li
          className={`cursor-pointer m-2 ${activeLink === "projects" ? "active" : ""}`}
          onClick={() => handleClick("projects")}
        >
          <Link to="/projects" smooth={true} duration={2000}>
            {activeLink === "projects" ? <BsFillXDiamondFill /> : "Projects"}
          </Link>
        </li>
        <li
          className={`cursor-pointer m-2 ${activeLink === "about" ? "active" : ""}`}
          onClick={() => handleClick("about")}
        >
          <Link to="/about" smooth={true} duration={2000}>
            {activeLink === "about" ? <BsFillXDiamondFill /> : "About"}
          </Link>
        </li>
        <li
          className={`cursor-pointer m-2 ${activeLink === "contact" ? "active" : ""}`}
          onClick={() => handleClick("contact")}
        >
          <Link to="/contact" smooth={true} duration={2000}>
            {activeLink === "contact" ? <BsFillXDiamondFill /> : "Contact"}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
