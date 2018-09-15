import React, { Component } from 'react';
import InfoCard from "../components/InfoCard";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="middle my-3 container">
        <h2>Contact Us</h2>
          <div id="card-holder">
            <InfoCard>
              <div className="card-body" id="contact-card">
                <i className="fa fa-phone mb-5"></i>
                <p className="card-text">512-322-7009</p>
              </div>
            </InfoCard>
            <InfoCard>
              <div className="card-body" id="contact-card">
                <i className="fa fa-envelope mb-5"></i>
                <p className="card-text">productions@fortyacrespress.com</p>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    )
  }
}
