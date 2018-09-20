import React, { Component } from 'react';

export default class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        { this.props.children }
      </div>
    )
  }
}
