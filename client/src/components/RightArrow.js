import React, { Component } from 'react';

export default class RightArrow extends Component {
  render() {
    return (
      <div className="rightarrow">
        <p onClick={this.props.changeRightContent} className="arrow">&#187;</p>
      </div>
    )
  }
}
