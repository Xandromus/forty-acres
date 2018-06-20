import React, { Component } from 'react';
import { Link } from "react-router-dom";
import fortyacreslogowhite from "../fortyacreslogowhite.svg";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <img id="brand-logo" src={fortyacreslogowhite} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className={window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"}>
            <Link to="/about" className="nav-link pt-3">About us</Link>
            </li>
            <li className={window.location.pathname === "/books"
              ? "nav-item active"
              : "nav-item"}>
              <Link to="/books" className="nav-link pt-3">Books</Link>
            </li>
            <li className={window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"}>
            <Link to="/contact" className="nav-link pt-3">Contact</Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </div>
      </nav>
    )
  }
}
