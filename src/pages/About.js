import React, { Component } from 'react';
import fortyacreslogo from "../fortyacreslogo.svg";
import InfoCard from "../components/InfoCard";
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="middle my-3 container">
          <img id="splash-logo" className="mx-auto my-5" src={fortyacreslogo} alt="Forty Acres Press logo" />
          <div id="card-holder">
            <InfoCard>
              <div className="card-body" id="card01">
                <i className="fa fa-user mb-5"></i>
                <h5 className="card-title">What We Offer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </InfoCard>
            <InfoCard>
              <div className="card-body" id="card02">
                <i className="fa fa-pencil mb-5"></i>
                <h5 className="card-title">What You Need</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </InfoCard>
            <InfoCard>
              <div className="card-body" id="card03">
                <i className="fa fa-book mb-5"></i>
                <h5 className="card-title">Publish Your Book</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    )
  }
}
