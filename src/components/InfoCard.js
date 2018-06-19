import React, { Component } from 'react';
import "../styles/InfoCard.css";

export default class InfoCard extends Component {
  render() {
    return (
      <div className="card">
        { this.props.children }
      </div>
    )
  }
}
