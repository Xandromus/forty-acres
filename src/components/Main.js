import React, { Component } from 'react';
import fortyacreslogo from "../fortyacreslogo.svg";
import '../styles/Main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main mt-5">
        <div className="middle mt-5">
        <img id="brand-logo" className="mx-auto mt-5" src={fortyacreslogo} />
        </div>
      </div>
    )
  }
}
