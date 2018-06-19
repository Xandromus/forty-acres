import React, { Component } from 'react';
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
            <li className="nav-item active">
              <a className="nav-link pt-3">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pt-3">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pt-3">Contact</a>
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
