import React, { Component } from 'react';
import Navigation from "./Navigation";
import "../styles/Header.css";


export default class Header extends Component {
  render() {
    return (
      <header className="header sticky-top">
        <Navigation />
      </header>
    )
  }
}
