import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import fortyacreslogowhite from "../fortyacreslogowhite.svg";
import "../styles/Navbar.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-light">
          <img id="brand-logo" alt="Forty Acres Press logo" src={fortyacreslogowhite} />
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="collapse navbar-collapse justify-content-end" isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav" navbar>
              <NavItem className={window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"}>
                <Link to="/about" className="nav-link pt-3">About us</Link>
              </NavItem>
              <NavItem className={window.location.pathname === "/books"
              ? "nav-item active"
              : "nav-item"}>
                <Link to="/books" className="nav-link pt-3">Books</Link>
              </NavItem>
              <NavItem className={window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"}>
                <Link to="/contact" className="nav-link pt-3">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

      


          
            // <li className={window.location.pathname === "/" ||
            // window.location.pathname === "/about"
            //   ? "nav-item active"
            //   : "nav-item"}>
            // <Link to="/about" className="nav-link pt-3">About us</Link>
            // </li>
            // <li className={window.location.pathname === "/books"
            //   ? "nav-item active"
            //   : "nav-item"}>
            //   <Link to="/books" className="nav-link pt-3">Books</Link>
            // </li>
            // <li className={window.location.pathname === "/contact"
            //   ? "nav-item active"
            //   : "nav-item"}>
            // <Link to="/contact" className="nav-link pt-3">Contact</Link>
            // </li>
      

