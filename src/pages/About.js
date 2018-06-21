import React, { Component } from 'react';
import { Button } from 'reactstrap';
import fortyacreslogo from "../fortyacreslogo.svg";
import InfoCard from "../components/InfoCard";
import InfoModal from '../components/InfoModal';
import modalContent from "../modalContent.json";
import "../styles/About.css";

export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
      index: 0,
      modalContent: modalContent
    }
  }


  showModal = () => {
    this.setState({ openModal: true });
  }

  resetModal = () => {
    this.setState({ openModal: false });
  }

  renderModal = () => {
    if (this.state.openModal) {
      return <InfoModal
        index={this.state.index}
        modalHeader={this.state.modalContent[this.state.index].modalHeader}
        modalBody={this.state.modalContent[this.state.index].modalBody}
        resetModal={this.resetModal}
        changeLeftContent={this.changeLeftContent}
        changeRightContent={this.changeRightContent}
      />
    }
  }

  changeLeftContent = () => {
    if (this.state.index === 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: 1})
    }
  }

  changeRightContent = () => {
    if (this.state.index === 0) {
      this.setState({ index: 1 })
    } else {
      this.setState({ index: 2})
    }
  }

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
                <Button className="btn btn-primary" onClick={() => { this.showModal(); this.setState({ index: 0 }) }}>Read more</Button>
              </div>
            </InfoCard>
            <InfoCard>
              <div className="card-body" id="card02">
                <i className="fa fa-pencil mb-5"></i>
                <h5 className="card-title">What You Need</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button className="btn btn-primary" onClick={() => { this.showModal(); this.setState({ index: 1 }) }}>Read more</Button>
              </div>
            </InfoCard>
            <InfoCard>
              <div className="card-body" id="card03">
                <i className="fa fa-book mb-5"></i>
                <h5 className="card-title">Publish Your Book</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button className="btn btn-primary" onClick={() => { this.showModal(); this.setState({ index: 2 }) }}>Read more</Button>
              </div>
            </InfoCard>
          </div>
        </div>
        {this.renderModal()}
      </div>
    )
  }
}
