import React, { Component } from 'react';

export default class Detail extends Component {
  render() {
    return (
      <div className="detail">
        { this.props.children }
      </div>
    )
  }
}
