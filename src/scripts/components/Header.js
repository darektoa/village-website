import React, { useState } from "react";
import "../../styles/components/Header.css";
import { NavLink, useLocation } from "react-router-dom";
import StringHelper from "../utils/string-helper.js";
import Pattern from "../../assets/images/pattern.png";
import Menu from "../../assets/images/menu.svg";

const Header = (props) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const className = StringHelper.join(" ", "header", props.className);
  if (pathname) {
  }

  return (
    <header className={className}>
      <div className="container">
        <h1>Kampung Cireundeu</h1>
        <nav className="container-nav">
          <ul>
            <li>
              <NavLink className="link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/galeri">
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/information">
                Info Penduduk
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                Kontak Kami
              </NavLink>
            </li>
          </ul>
        </nav>

        <div id="toggle">
          <img src={Menu} alt="open menu" />
        </div>
      </div>

      <div id={isOpen ? "nvd-container active" : "nvd-container"}>
        <img src={Pattern} alt="liquid" className="liquid" />
        <div className="nvd-item-container">
          <NavLink
            className="nvd-item"
            activeClassName="nvd-item active"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="nvd-item"
            activeClassName="nvd-item active"
            to="/"
            exact
          >
            Blog
          </NavLink>
          <NavLink
            className="nvd-item"
            activeClassName="nvd-item active"
            to="/"
            exact
          >
            Galeri
          </NavLink>
          <NavLink
            className="nvd-item"
            activeClassName="nvd-item active"
            to="/"
            exact
          >
            Info Penduduk
          </NavLink>
          <NavLink
            className="nvd-item"
            activeClassName="nvd-item active"
            to="/"
            exact
          >
            Profile
          </NavLink>
          <NavLink
            className="nvd-item"
            activeClassName="nvd-item active"
            to="/"
            exact
          >
            Kontak Kami
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
