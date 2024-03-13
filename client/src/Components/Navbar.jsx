import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="/">
          BLVCK Tower
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link mr-4" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mr-4">
              <a className="nav-link" href="/">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Orion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/account">
                Join Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
