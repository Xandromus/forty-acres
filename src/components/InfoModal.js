import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "../styles/InfoModal.css";

export default class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }

  toggle = () => {
    this.props.resetModal();
  }

  renderLeftArrow = () => {
    if (this.props.index > 0 ) {
      return <LeftArrow 
        index={this.props.index}
        changeLeftContent={this.props.changeLeftContent}
      />
    }
  }

  renderRightArrow = () => {
    if (this.props.index < 2 ) {
      return <RightArrow 
        index={this.props.index}
        changeRightContent={this.props.changeRightContent}
      />
    }
  }

  render() {
    return (
      <div>
        <Modal centered={true} isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>{this.props.modalHeader}</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-1 arrow-holder">
                {this.renderLeftArrow()}
              </div>
              <div className="col-10" dangerouslySetInnerHTML={{ __html: this.props.modalBody }}>
              </div>
              <div className="col-1 arrow-holder">
                {this.renderRightArrow()}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-primary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}