import React, { Component } from 'react';

export default class LeftArrow extends Component {

  render() {
    return (
      <div className="leftarrow">
        <p onClick={this.props.changeLeftContent} className="arrow">&#171;</p>
      </div>
    )
  }
}
